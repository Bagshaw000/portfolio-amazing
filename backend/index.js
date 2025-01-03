"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var mailtrap_1 = require("mailtrap");
var cors_1 = require("@fastify/cors");
var server = (0, fastify_1.default)();
var typebox_1 = require("@sinclair/typebox");
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server.register(cors_1.default, {
                    origin: ["http://localhost:5173", "http://[::1]:8080"],
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
start();
var emailSchema = typebox_1.Type.Object({
    fname: typebox_1.Type.String(),
    lname: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    message: typebox_1.Type.String(),
    category: typebox_1.Type.String(),
});
server.post("/email", function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var TOKEN, SENDER_EMAIL, RECIPIENT_EMAIL, client, response_1, response_2, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                TOKEN = "65ee2f769f5a1a5f1f7507ebb68168b6";
                SENDER_EMAIL = "enquiry@demomailtrap.com";
                RECIPIENT_EMAIL = "irechukwuamazing@gmail.com";
                client = new mailtrap_1.MailtrapClient({ token: TOKEN });
                if (!(request.body.category == "new")) return [3 /*break*/, 2];
                return [4 /*yield*/, client.send({
                        from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
                        to: [{ email: RECIPIENT_EMAIL }],
                        subject: "New Client Enquiry",
                        // text: "Welcome to Mailtrap Sending!",
                        html: "<!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Client Inquiry</title>\n        </head>\n        <body style=\"font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;\">\n            <div style=\"max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">\n                <h2 style=\"color: #333;\">Client Inquiry</h2>\n                <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n                    <span style=\"font-weight: bold; color: #222;\">Full Name: </span> ".concat(request.body.fname, "  ").concat(request.body.lname, " with email ").concat(request.body.email, "\n                </p>\n                <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n                    <span style=\"font-weight: bold; color: #222;\">Message:</span> ").concat(request.body.fname, "  ").concat(request.body.message, "\n                </p>\n            </div>\n        </body>\n        </html>\n      "),
                    })];
            case 1:
                response_1 = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, client.send({
                    from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
                    to: [{ email: RECIPIENT_EMAIL }],
                    subject: "Subscription to news letter",
                    // text: "Welcome to Mailtrap Sending!",
                    html: "<!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Client Inquiry</title>\n  </head>\n  <body style=\"font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;\">\n      <div style=\"max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">\n          <h2 style=\"color: #333;\">News Letter</h2>\n          <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n              <span style=\"font-weight: bold; color: #222;\">Full Name: </span> ".concat(request.body.fname, "  ").concat(request.body.lname, " with email ").concat(request.body.email, "\n          </p>\n          <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n              <span style=\"font-weight: bold; color: #222;\">Message:</span> ").concat(request.body.fname, "  ").concat(request.body.message, "\n          </p>\n      </div>\n  </body>\n  </html>\n  "),
                })];
            case 3:
                response_2 = _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, client.send({
                    from: { name: "Amazing Irechukwu", email: SENDER_EMAIL },
                    to: [{ email: RECIPIENT_EMAIL }],
                    subject: "New Client Enquiry",
                    // text: "Welcome to Mailtrap Sending!",
                    html: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Client Inquiry</title>\n</head>\n<body style=\"font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f9f9f9;\">\n    <div style=\"max-width: 600px; margin: auto; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\">\n        <h2 style=\"color: #333;\">Client Inquiry</h2>\n        <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n            <span style=\"font-weight: bold; color: #222;\">Full Name: </span> ".concat(request.body.fname, "  ").concat(request.body.lname, " with email ").concat(request.body.email, "\n        </p>\n        <p style=\"font-size: 1rem; line-height: 1.5; color: #555;\">\n            <span style=\"font-weight: bold; color: #222;\">Message:</span> ").concat(request.body.fname, "  ").concat(request.body.message, "\n        </p>\n    </div>\n</body>\n</html>\n"),
                })];
            case 5:
                response = _a.sent();
                if (response.success) {
                    return [2 /*return*/, reply.status(200).send({ message: "Email sent successfully" })];
                }
                else {
                    return [2 /*return*/, reply.status(500).send({ message: "Failed to send email" })];
                }
                return [2 /*return*/];
        }
    });
}); });
server.listen({ port: 8080 }, function (err, address) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server listening at ".concat(address));
});
