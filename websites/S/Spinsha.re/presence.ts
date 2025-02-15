const presence = new Presence({
    clientId: "752151960743837817"
  }),
  browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "bigdefault"
  };

  if (document.location.hostname == "spinsha.re") {
    const pathname = document.location.pathname;
    switch (pathname) {
      case "/":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Viewing Frontpage";
        break;
      case "/new":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Viewing New Charts";
        break;
      case "/hot":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Viewing Hot Charts";
        break;
      case "/popular":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Viewing Popular Charts";
        break;
      case "/legal":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Browsing Legal Information...";
        presenceData.state = "Why?";
        break;
      case "/support":
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Browsing Support Information...";
        presenceData.state = "Pls Donate Lol";
        break;
      default:
        //Idle
        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Idling";
        presenceData.state = "Doing... Something?";
        break;
    }
    if (pathname.startsWith("/song")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-title").innerHTML;
      presenceData.state = document.querySelector(".song-artist").innerHTML;
      if (document.querySelector(".player-active")) {
        presenceData.smallImageKey = "play";
      }
    } else if (pathname.startsWith("/user")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Browsing User Profile:";
      presenceData.state = document.querySelector(".user-name").innerHTML;
    } else if (pathname.startsWith("/search")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Searching";
      presenceData.state = "🔍";
    } else if (pathname.startsWith("/report")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Reporting Something...";
      presenceData.state = "🔨";
    }
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
