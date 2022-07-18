async function makeApiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

function appendData(data, parent) {
  data.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute = ("id", "divMain");

    let image = document.createElement("img");
    image.src = element.urls.small;

    let heading = document.createElement("p");
    heading.textContent = element.user.name;

    // let heading1 = document.createElement("p");
    // heading1.innerText = element.user.name;

    // let heading2 = document.createElement("p");
    // heading2.innerHTML = element.user.name;

    div.append(image, heading);

    div.onclick = function () {
      let x = [element];
      localStorage.setItem("setPhoto", JSON.stringify(x));
      window.location.href = "/src/html/photo.html";
    };

    parent.append(div);
  });
}

export { makeApiCall, appendData };
