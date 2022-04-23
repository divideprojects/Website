// Copyright (C) 2022 Jayant Hegde Kageri
// 
// This file is part of Divide Projects Website.
// 
// Divide Projects Website is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// Divide Projects Website is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Divide Projects Website.  If not, see <http://www.gnu.org/licenses/>.

import requestIp from 'request-ip'

async function contact(req, res) {
    // Block the requst if not a POST request
    if (req.method.toString().toUpperCase() !== "POST") {
        return res.status(405).send("Method not Allowed")
    }

    // Block the reqyeust if the whitelist key is not present
    if (!req.headers.key || req.headers.key.toLowerCase() !== "contact.divideprojects.web") {
        return res.status(400).send("Bad Requset")
    }

    // Check Required Data
    if (!req.body.name || !req.body.email || !req.body.message) {
        return res.status(400).send({ success: false, message: "Bad Request" })
    }

    // Regex Expression to check email is valid or not
    const eMailRegex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // Deconstruct the body
    const { name, email, message } = req.body

    // Match the Email with Regex
    if (!email.toString().toLowerCase().match(eMailRegex)) {
        return res.status(400).send({ success: false, message: "Bad Request" })
    }

    // Message to be sent
    const msg = `#CONTACT_REQUEST
    Name: ${name}
    eMail: ${email}
    IP: ${requestIp.getClientIp(req)}
    Message:\n${message}
    `

    // Body of the message to be sent
    let bodyContent = JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text: msg,
        disable_web_page_preview: true,
    });

    // Send the request to Telegram Bot API
    const request = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*/*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json"
        },
        redirect: "follow",

        body: bodyContent
    })
    const response = await request.json()

    // Send Response
    return res.status(201).send({ success: true, sent: response.ok })
}

export default contact
