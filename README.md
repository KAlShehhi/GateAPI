
# **Overview**
Welcome to the Gate API repository! This API acts as an intermediary between a local gate system and the main backend. Its primary function is to receive requests from the local gate, forward them to the main backend, and then relay the response back to the gate.

# **Features:**
Request Forwarding: Receives requests from the local gate and forwards them to the main backend.
Response Relay: Relays responses from the main backend back to the local gate.


# **API Endpoints:**
```
POST /gate/entry
Description: Forwards a entry request from the local gate to the main backend.
Request Body: JSON object containing the request details.
Response: JSON object containing the response from the main backend.
```

```
POST /gate/exit
Description: Forwards a exit request from the local gate to the main backend.
Request Body: JSON object containing the request details.
Response: JSON object containing the response from the main backend.
```
