import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { appId, serverSecretCode } from '../data';
import { useUser } from "@clerk/clerk-react";

const RoomPage = () => {
    const { id } = useParams();
    const { user } = useUser();

    let myMeeting = async (element) => {
        if (!user) return;

        const appID = appId;
        const serverSecret = serverSecretCode;
        const username =
            user.fullName || user.username || user.primaryEmailAddress?.emailAddress || "Guest";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            user.id,
            username
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                { name: 'Copy Link', url: `${window.location.origin}/room/${id}` },
            ],
            scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
            showScreenSharingButton: true,
        });
    };

    return <div ref={myMeeting} style={{ width: "100%", height: "100vh" }} />;
};

export default RoomPage;
