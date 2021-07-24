var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bbd238f8-ee34-481c-90d8-44b7dbfa531a"],"propsByKey":{"bbd238f8-ee34-481c-90d8-44b7dbfa531a":{"name":"sofia","sourceUrl":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png","frameSize":{"x":328,"y":357},"frameCount":1,"looping":true,"frameDelay":2,"version":"YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":357},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YkI8OMgqLb2Tbwyal3doDas5p3hnt3uX/category_faces/kidportrait_06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(20,25,18,18);
sofia.shapeColor="red"
sofia.setAnimation("sofia")
sofia.scale=0.1

var cardboard1 = createSprite(10,70,100,20);
cardboard1.shapeColor="blue"

var cardboard2 = createSprite(145,51,60,20);
cardboard2.shapeColor="blue"

var cardboard3 = createSprite(120,48,20,70);
cardboard3.shapeColor="blue"

var cardboard4 = createSprite(224,296,90,20);
cardboard4.shapeColor="blue"

var cardboard5 = createSprite(86,137,100,20);
cardboard5.shapeColor="blue"

var cardboard6 = createSprite(155,282,20,110);
cardboard6.shapeColor="blue"

var cardboard7= createSprite(9,313,100,20);
cardboard7.shapeColor="blue"

var cardboard8 = createSprite(57,307,20,110);
cardboard8.shapeColor="blue"

var cardboard9 = createSprite(120,400,20,200);
cardboard9.shapeColor="blue"

var cardboard10 = createSprite(3,373,150,20);
cardboard10.shapeColor="blue"

var cardboard11 = createSprite(1,200,190,20);
cardboard11.shapeColor="blue"

var cardboard12 = createSprite(56,252,20,100);
cardboard12.shapeColor="blue"

var cardboard13 = createSprite(220,385,80,20);
cardboard13.shapeColor="blue"

var cardboard14 = createSprite(219,56,20,150);
cardboard14.shapeColor="blue"

var cardboard15 = createSprite(227,160,100,20);
cardboard15.shapeColor="blue"

var cardboard16 = createSprite(116,297,80,20);
cardboard16.shapeColor="blue"

var cardboard17 = createSprite(326,299,20,90);
cardboard17.shapeColor="blue"

var cardboard18 = createSprite(363,300,90,20);
cardboard18.shapeColor="blue"

var cardboard19 = createSprite(278,46,20,100);
cardboard19.shapeColor="blue"

var cardboard20 = createSprite(345,64,70,20);
cardboard20.shapeColor="blue"

var cardboard21 = createSprite(156,385,20,100);
cardboard21.shapeColor="blue"

var cardboard22 = createSprite(190,336,90,20);
cardboard22.shapeColor="blue"

var cardboard23 = createSprite(324,156,20,100);
cardboard23.shapeColor="blue"

var cardboard24 = createSprite(356,150,80,20);
cardboard24.shapeColor="blue"

var cardboard25 = createSprite(220, 227,90,20);
cardboard25.shapeColor="blue"

var cup = createSprite(384,360,20,70);
cup.shapeColor="gold"


function draw() {
background("pink")
drawSprites();
createEdgeSprites();
  sofia.bounceOff(edges);


sofia.velocityX = 0;
sofia.velocityY = 0;

if (keyDown("UP_ARROW")) {
  sofia.velocityY = -4
}

if (keyDown("DOWN_ARROW")) {
  sofia.velocityY = 4
}

if (keyDown("RIGHT_ARROW")) {
  sofia.velocityX = 4
}

if (keyDown("LEFT_ARROW")) {
  sofia.velocityX = -4
}

if (sofia.isTouching(cardboard1)||
sofia.isTouching(cardboard2)||
sofia.isTouching(cardboard3)||
sofia.isTouching(cardboard4)||
sofia.isTouching(cardboard5)||
sofia.isTouching(cardboard6)||
sofia.isTouching(cardboard7)||
sofia.isTouching(cardboard8)||
sofia.isTouching(cardboard9)||
sofia.isTouching(cardboard10)||
sofia.isTouching(cardboard11)||
sofia.isTouching(cardboard12)||
sofia.isTouching(cardboard13)||
sofia.isTouching(cardboard14)||
sofia.isTouching(cardboard15)||
sofia.isTouching(cardboard16)||
sofia.isTouching(cardboard17)||
sofia.isTouching(cardboard18)||
sofia.isTouching(cardboard19)||
sofia.isTouching(cardboard20)||
sofia.isTouching(cardboard21)||
sofia.isTouching(cardboard22)||
sofia.isTouching(cardboard23)||
sofia.isTouching(cardboard24)||
sofia.isTouching(cardboard25)) {
    sofia.x = 20;
    sofia.y = 25;
}

if (sofia.isTouching(cup)) {
  fill("red");
  stroke("black")
  textSize(15);
  text("YOU WIN!!",49,120);
  
}

text(" sofia",37,25);
text("cup",347,356);






}

















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
