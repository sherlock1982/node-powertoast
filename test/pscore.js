import toast from "../lib/index.js";

toast({
  disableWinRT: true, //No WinRT -> Force PowerShell
  usePowerShellCore: true, //Use pwsh (core) instead of powershell (desktop)
  appID: "Microsoft.XboxApp_8wekyb3d8bbwe!Microsoft.XboxApp",
  title: "Dummy",
  message: "Hello World",
  icon: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/480/winner.jpg",
  cropIcon: true,
  attribution: "Achievement",
  timeStamp: "1568710924",
  silent: false,
  button: [
    { text: "1", onClick: "bingmaps:?q=sushi" }
  ],
  audio: "ms-winsoundevent:Notification.Achievement",
  progress: {
    header: "up",
    footer: "down",
    percent: 0,
  },
  uniqueID: "id0",
  group: {
    id: "id1",
    title: "group",
  },
  headerImg: "../screenshot/example.png",
  callback: {
    keepalive: 8,
    onActivated: () => {
      console.log("activated");
    },
    onDismissed: (reason) => {
      console.log(reason);
    },
  },
})
.then(() => {
  console.log("ok");
})
.catch((err) => {
  console.error(err);
});