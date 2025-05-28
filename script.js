function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
      ./0001.webp
     ./0002.webp
     ./0003.webp
     ./0004.webp
     ./0005.webp
     ./0006.webp
     ./0007.webp
     ./0008.webp
     ./0009.webp
     ./0010.webp
     ./0011.webp
     ./0012.webp
     ./0013.webp
     ./0014.webp
     ./0015.webp
     ./0016.webp
     ./0017.webp
     ./0018.webp
     ./0019.webp
     ./0020.webp
     ./0021.webp
     ./0022.webp
     ./0023.webp
     ./0024.webp
     ./0025.webp
     ./0026.webp
     ./0027.webp
     ./0028.webp
     ./0029.webp
     ./0030.webp
     ./0031.webp
     ./0032.webp
     ./0033.webp
     ./0034.webp
     ./0035.webp
     ./0036.webp
     ./0037.webp
     ./0038.webp
     ./0039.webp
     ./0040.webp
     ./0041.webp
     ./0042.webp
     ./0043.webp
     ./0044.webp
     ./0045.webp
     ./0046.webp
     ./0047.webp
     ./0048.webp
     ./0049.webp
     ./0050.webp
     ./0051.webp
     ./0052.webp
     ./0053.webp
     ./0054.webp
     ./0055.webp
     ./0056.webp
     ./0057.webp
     ./0058.webp
     ./0059.webp
     ./0060.webp
     ./0061.webp
     ./0062.webp
     ./0063.webp
     ./0064.webp
     ./0065.webp
     ./0066.webp
     ./0067.webp
     ./0068.webp
     ./0069.webp
     ./0070.webp
     ./0071.webp
     ./0072.webp
     ./0073.webp
     ./0074.webp
     ./0075.webp
     ./0076.webp
     ./0077.webp
     ./0078.webp
     ./0079.webp
     ./0080.webp
     ./0081.webp
     ./0082.webp
     ./0083.webp
     ./0084.webp
     ./0085.webp
     ./0086.webp
     ./0087.webp
     ./0088.webp
     ./0089.webp
     ./0090.webp
     ./0091.webp
     ./0092.webp
     ./0093.webp
     ./0094.webp
     ./0095.webp
     ./0096.webp
     ./0097.webp
     ./0098.webp
     ./0099.webp
     ./0100.webp
     ./0101.webp
     ./0102.webp
     ./0103.webp
     ./0104.webp
     ./0105.webp
     ./0106.webp
     ./0107.webp
     ./0108.webp
     ./0109.webp
     ./0110.webp
     ./0111.webp
     ./0112.webp
     ./0113.webp
     ./0114.webp
     ./0115.webp
     ./0116.webp
     ./0117.webp
     ./0118.webp
     ./0119.webp
     ./0120.webp
     ./0121.webp
     ./0122.webp
     ./0123.webp
     ./0124.webp
     ./0125.webp
     ./0126.webp
     ./0127.webp
     ./0128.webp
     ./0129.webp
     ./0130.webp
     ./0131.webp
     ./0132.webp
     ./0133.webp
     ./0134.webp
     ./0135.webp
     ./0136.webp
     ./0137.webp
     ./0138.webp
     ./0139.webp
     ./0140.webp
     ./0141.webp
     ./0142.webp
     ./0143.webp
     ./0144.webp
     ./0145.webp
     ./0146.webp
     ./0147.webp
     ./0148.webp
     ./0149.webp
     ./0150.webp
     ./0151.webp
     ./0152.webp
     ./0153.webp
     ./0154.webp
     ./0155.webp
     ./0156.webp
     ./0157.webp
     ./0158.webp
     ./0159.webp
     ./0160.webp
     ./0161.webp
     ./0162.webp
     ./0163.webp
     ./0164.webp
     ./0165.webp
     ./0166.webp
     ./0167.webp
     ./0168.webp
     ./0169.webp
     ./0170.webp
     ./0171.webp
     ./0172.webp
     ./0173.webp
     ./0174.webp
     ./0175.webp
     ./0176.webp
     ./0177.webp
     ./0178.webp
     ./0179.webp
     ./0180.webp
     ./0181.webp
     ./0182.webp
     ./0183.webp
     ./0184.webp
     ./0185.webp
     ./0186.webp
     ./0187.webp
     ./0188.webp
     ./0189.webp
     ./0190.webp
     ./0191.webp
     ./0192.webp
     ./0193.webp
     ./0194.webp
     ./0195.webp
     ./0196.webp
     ./0197.webp
     ./0198.webp
     ./0199.webp
     ./0200.webp
     ./0201.webp
     ./0202.webp
     ./0203.webp
     ./0204.webp
     ./0205.webp
     ./0206.webp
     ./0207.webp
     ./0208.webp
     ./0209.webp
     ./0210.webp
     ./0211.webp
     ./0212.webp
     ./0213.webp
     ./0214.webp
     ./0215.webp
     ./0216.webp
     ./0217.webp
     ./0218.webp
     ./0219.webp
     ./0220.webp
     ./0221.webp
     ./0222.webp
     ./0223.webp
     ./0224.webp
     ./0225.webp
     ./0226.webp
     ./0227.webp
     ./0228.webp
     ./0229.webp
     ./0230.webp
     ./0231.webp
     ./0232.webp
     ./0233.webp
     ./0234.webp
     ./0235.webp
     ./0236.webp
     ./0237.webp
     ./0238.webp
     ./0239.webp
     ./0240.webp
     ./0241.webp
     ./0242.webp
     ./0243.webp
     ./0244.webp
     ./0245.webp
     ./0246.webp
     ./0247.webp
     ./0248.webp
     ./0249.webp
     ./0250.webp
     ./0251.webp
     ./0252.webp
     ./0253.webp
     ./0254.webp
     ./0255.webp
     ./0256.webp
     ./0257.webp
     ./0258.webp
     ./0259.webp
     ./0260.webp
     ./0261.webp
     ./0262.webp
     ./0263.webp
     ./0264.webp
     ./0265.webp
     ./0266.webp
     ./0267.webp
     ./0268.webp
     ./0269.webp
     ./0270.webp
     ./0271.webp
     ./0272.webp
     ./0273.webp
     ./0274.webp
     ./0275.webp
     ./0276.webp
     ./0277.webp
     ./0278.webp
     ./0279.webp
     ./0280.webp
     ./0281.webp
     ./0282.webp
     ./0283.webp
     ./0284.webp
     ./0285.webp
     ./0286.webp
     ./0287.webp
     ./0288.webp
     ./0289.webp
     ./0290.webp
     ./0291.webp
     ./0292.webp
     ./0293.webp
     ./0294.webp
     ./0295.webp
     ./0296.webp
     ./0297.webp
     ./0298.webp
     ./0299.webp
     ./0300.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `700% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
document.addEventListener("DOMContentLoaded", function () {
    const zoomImages = document.querySelectorAll(".click-to-zoom");

    zoomImages.forEach(img => {
        img.addEventListener("click", function () {
            img.classList.toggle("zoomed");
        });
    });
});
// 點擊圖片放大或縮小
document.querySelectorAll('.click-to-zoom').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

