import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { appId, serverSecretCode } from '../data';

const RoomPage = () => {
    const { id } = useParams();

    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = appId;
        const serverSecret = serverSecretCode;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, String(Date.now()), "Ansh");


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'copy link',
                    url:
                        `http://localhost:5173/room/${id}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall]. you can also use [ZegoUIKitPrebuilt.GroupCall] to implement group calls.
            },
            showScreenSharingButton: true,
        });


    };
    return (
        <div ref={myMeeting}>
        </div>
    )
}

export default RoomPage
