async function login() {
  function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }


  const authToken = getCookie("auth_token");
  if (!authToken) {
    const password = prompt("Please enter the password");
    try {
      const response = await fetch(`https://fav-tool.onrender.com/user/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.status === 401) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() - 1);
        document.cookie =
          "auth_token=; expires=" + expirationDate.toUTCString() + "; path=/";
        throw new Error("Token expired, please retry");
      } else if (data.status === 406) {
        throw new Error("Login failed");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const tabs =
    chrome && chrome.tabs
      ? await new Promise((resolve) =>
          chrome.tabs.query({ active: true, currentWindow: true }, resolve)
        )
      : await new Promise((resolve) =>
          browser.tabs.query({ active: true, currentWindow: true }, resolve)
        );
  const activeTab = tabs[0];
  document.getElementById("websiteName").value = activeTab.title || "";
  document.getElementById("websiteURL").value = activeTab.url || "";
  // document.getElementById("description").value = activeTab.description || "";

  document
    .getElementById("trackForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      await login();
      const websiteName = document.getElementById("websiteName").value;
      const websiteURL = document.getElementById("websiteURL").value;
      const description = document.getElementById("description").value;
      const type = document.getElementById("category").value;

      console.log("Coming inside submit");

      const websiteData = {
        link: websiteURL || window.location.href,
        name: websiteName || document.title,
        description: description || "",
        type: type || 2,
      };

      try {
        const response = await fetch("https://fav-tool.onrender.com/tool/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(websiteData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById("trackFormContainer").style.display = "none";
        document.getElementById("successMessage").style.display = "block";
      } catch (error) {
        console.error("Error making API request:", error);
        document.getElementById("failedMessage").style.display = "block";
      }
    });
});
