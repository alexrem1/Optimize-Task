try {
  // set widget to display none
  document.querySelector(".mpx__widget--container").style.display = "none";

  //mouseout listener added to window w/named function
  window.addEventListener("mouseout", function delayShow(e) {
    //check these conditions
    const shouldShowExitIntent =
      !e.toElement && !e.relatedTarget && e.clientY < 10;
    //if they are all true then
    if (shouldShowExitIntent) {
      // delay displaying widget by 3s, remove eventlistener and scroll to top
      setTimeout(() => {
        this.window.removeEventListener("mouseout", delayShow);
        this.window.scrollTo(0, 0);
        document.querySelector(".mpx__widget--container").style.display =
          "block";
      });
    }
  });

  // close widget
  function closeWidget() {
    document
      .querySelector(".mpx__widget__header__close")
      .addEventListener("click", () => {
        document.querySelector(".mpx__widget--container").style.display =
          "none";
      });
  }
  //call close widget
  closeWidget();
} catch (error) {
  console.log(error);
}

//add event to analytics
document
  .querySelector(".mpx__widget__content__text__main>a")
  .addEventListener("click", function () {
    dataLayer.push({
      event: "ga_event",
      category: "optimize",
      action: "view blog",
      label: "cta",
    });
  });

document
  .querySelector(".mpx__widget__content__img>a")
  .addEventListener("click", function () {
    dataLayer.push({
      event: "ga_event",
      category: "optimize",
      action: "view blog",
      label: "cta",
    });
  });
