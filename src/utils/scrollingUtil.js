import React from "react";
import { Slide, Grow } from "@material-ui/core";

function getScrollY(scroller) {
  return scroller.pageYOffset !== undefined
    ? scroller.pageYOffset
    : scroller.scrollTop !== undefined
    ? scroller.scrollTop
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

const useShowOnScroll = options => {
  const { threshold, scroller } = options;

  const [show, setShow] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const scrollY = getScrollY(scroller || window);

    setShow(
      scrollY > threshold ? true : false
    );
  }, [scroller, threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return show;
};

const useHideOnScroll = options => {
  const { threshold, scroller } = options;

  const scrollRef = React.useRef();
  const [hide, setHide] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const scrollY = getScrollY(scroller || window);
    const prevScrollY = scrollRef.current;
    scrollRef.current = scrollY;

    setHide(
      scrollY < prevScrollY
        ? false
        : scrollY > prevScrollY &&
          scrollY > (threshold != null ? threshold : 100)
        ? true
        : false
    );
  }, [scroller, threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return hide;
};

function ShowOnScroll(props) {
  const { children, threshold, scroller, ...other } = props;

  const show = useShowOnScroll({ threshold, scroller });

  return (
    <Grow in={show} {...other}>
      {children}
    </Grow>
  );
}

function HideOnScroll(props) {
  const { children, threshold, scroller, ...other } = props;

  const hide = useHideOnScroll({ threshold, scroller });

  return (
    <Slide appear={false} direction="down" in={!hide} {...other}>
      {children}
    </Slide>
  );
}

function scrollToHashElement () {

  const hash = window.location.hash;
  const element = document.getElementById(hash.replace("#", ""));

  if(element) {
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0
      });
    }, 0);
  } else {
    scrollToTop()
  }
}

function scrollToTop () {
  window.history.pushState(null, null, '#');
  window.scrollTo({
    behavior: "smooth",
    top: 0
  });
}

function scrollDownPageLength () {
  window.scrollTo({
    behavior: "smooth",
    top: document.body.offsetHeight
  });
}

function setHash(hash) {
  window.history.pushState(null, null, `#${hash}`);
  scrollToHashElement();
}

export {
  ShowOnScroll,
  HideOnScroll,
  scrollToTop,
  scrollToHashElement,
  scrollDownPageLength,
  setHash
}