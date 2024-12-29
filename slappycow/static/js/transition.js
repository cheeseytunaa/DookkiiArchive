var root = document.querySelector(":root");

function get_color(variable) {
  let root = document.querySelector(":root");
  let root_styles = getComputedStyle(root);
  return root_styles.getPropertyValue(variable);
}

let color = get_color("--background-color");

function transition(directory) {
  if (!directory) return;
  let $waterwave = $("<canvas>", {
    class: "transition-element-1",
    style: "height: 100%;",
  });
  $("body").append($waterwave);
  let $background = $("<div>", {
    class: "transition-element-2",
    style: "background-color: " + color,
  });
  $("body").append($background);
  $(".transition-element-1").waterwave({
    parent: "",
    color: color,
    direction: "up",
    background: "",
  });

  $(".transition-element-1").animate({ bottom: "-37%" }, 1000, () => {
    setTimeout(() => {
      $(".transition-element-1").animate(
        {
          bottom: "70%",
        },
        1500,
        () => {
          setTimeout(() => {
            window.location.href = directory;
          }, 200);
        }
      );
    }, 1000);
  });

  $(".transition-element-2").animate(
    {
      bottom: "-120%",
    },
    1000,
    () => {
      setTimeout(() => {
        $(".transition-element-2").animate(
          {
            bottom: "-20%",
          },
          1500,
          () => {}
        );
      }, 1000);
    }
  );
}

function onload_transition() {
  let $waterwave = $("<canvas>", {
    class: "transition-element-1",
    style: "height: 100% ;bottom: 100%",
  });
  $("body").append($waterwave);
  let $background = $("<div>", {
    class: "transition-element-2",
    style: "bottom: 0%; background-color: " + color,
  });
  $("body").append($background);
  $(".transition-element-1").waterwave({
    parent: "",
    color: color,
    direction: "up",
    background: "",
  });

  setTimeout(() => {
    $("body#onload").removeAttr("id");
    $("div#content").removeAttr("id");
  }, 1000);

  setTimeout(() => {
    $(".transition-element-1").remove();
    $(".transition-element-2").remove();
    $(".transition-element-3").remove();
  }, 3500);

  $(".transition-element-1").animate({ bottom: "100%" }, 1000, () => {
    setTimeout(() => {
      $(".transition-element-1").animate(
        {
          bottom: "-60%",
        },
        1500
      );
    }, 1000);
  });

  $(".transition-element-2").animate(
    {
      bottom: "0%",
    },
    1000,
    () => {
      setTimeout(() => {
        $(".transition-element-2").animate(
          {
            bottom: "-160%",
          },
          1500,
          () => {}
        );
      }, 1000);
    }
  );
}
