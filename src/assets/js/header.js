import $ from "jquery";

export function headerScript() {

  /* ---------- Responsive navbar animation ---------- */

  function test() {
    const $tabs = $("#navbarSupportedContent");
    const $activeItem = $tabs.find(".active");

    if (!$tabs.length || !$activeItem.length) return;

    const height = $activeItem.innerHeight();
    const width = $activeItem.innerWidth();
    const position = $activeItem.position();

    $(".hori-selector").css({
      top: position.top + "px",
      left: position.left + "px",
      height: height + "px",
      width: width + "px",
    });
  }

  /* ---------- Initial run ---------- */
  setTimeout(test, 0);

  /* ---------- Click animation ---------- */
  $("#navbarSupportedContent").on("click", "li", function () {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");

    const height = $(this).innerHeight();
    const width = $(this).innerWidth();
    const position = $(this).position();

    $(".hori-selector").css({
      top: position.top + "px",
      left: position.left + "px",
      height: height + "px",
      width: width + "px",
    });
  });

  /* ---------- Window resize ---------- */
  const handleResize = () => {
    setTimeout(test, 500);
  };
  $(window).on("resize", handleResize);

  /* ---------- Navbar toggle ---------- */
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(test, 300);
  });

  /* ---------- Active menu based on URL ---------- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  const target = $(
    `#navbarSupportedContent ul li a[href="${path}"]`
  );

  if (target.length) {
    target.parent().addClass("active");
  }

  /* ---------- CLEANUP (VERY IMPORTANT) ---------- */
  return () => {
    $("#navbarSupportedContent").off("click", "li");
    $(window).off("resize", handleResize);
    $(".navbar-toggler").off("click");
  };
}
