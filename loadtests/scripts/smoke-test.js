import http from 'k6/http';
import { check } from "k6";
export let options = {
    stages: [
        // Ramp-up from 1 to 5 VUs in 5s
        { duration: "5s", target: 5 },
        // Stay at rest on 5 VUs for 10s
        { duration: "10s", target: 5 },
        // Ramp-down from 5 to 0 VUs for 5s
        { duration: "5s", target: 0 }
    ]
};
export default function () {
    const response = http.get("http://161.97.99.214:3000/auth/signup");
    check(response, { "status is 200": (r) => r.status === 200 });
};