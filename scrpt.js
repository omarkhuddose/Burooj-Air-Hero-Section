document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "We miss you 👋";
    } else {
      document.title = "Dunes Aero";
    }
  });
  