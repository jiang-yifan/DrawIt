window.LogIn = {};

LogIn.initialize = function (context) {
  this.renderViews();
  this.pencilImg = new Image();
  this.pencilImg.src =
    "https://www.filepicker.io/api/file/Ec9ERBa0RWmudiddmpwu";
  this.blackWhite = new Image();
  this.blackWhite.src =
    "https://www.filepicker.io/api/file/ao0dsdCxTfSdq32ljpku";
  this.color = new Image();
  this.color.src =
    "https://www.filepicker.io/api/file/spSuzdOtT0KdoOIuepqK";
  this.pointer = new Image();
  this.pointer.src =
    "https://www.filepicker.io/api/file/eP9FQJpOTxSwbq8PwCXv";
  var that = this;
  this.blackWhite.onload = function () {
    setTimeout(that.beginDrawing.bind(that,context), 500);
  };

  this.mountain = [[391,0], [384,3], [360,11], [353,14],
                    [346,23], [337,24], [332,29], [330,31],
                    [326,41], [327,65], [318,70], [312,81],
                    [304,86], [293,96], [284,116], [274,123],
                    [266,138], [251,147], [241,151]];

  this.rightMeadow = [[241,151], [251,157], [238,163], [225,170],
          [210,177], [196,186], [219,191], [252,207], [259,211],
          [247,216], [227,223], [196,229], [249,239], [202,248],
          [167,252], [123,257], [182,263], [221,268], [267,273],
          [260,276], [234,281], [201,285], [171,288], [146,293],
          [128,299], [159,305], [185,308], [217,316], [193,325],
          [170,330], [157,336]];

  this.leftMeadow = [[157,336], [170,330], [193,325], [217,316],
          [185,308], [159,305], [128,299], [146,293],
          [171,288], [201,285], [234,281], [267,273], [260,276],
          [267,273], [221,268], [182,263], [123,257], [167,252],
          [202,248], [249,239], [196,229],
          [247,216], [252,207], [219,190], [187,183], [158,171],
          [139,171], [123,150], [107,132], [101,128],
          [85,122], [71,96], [50,100], [7,84]];


};

LogIn.beginDrawing = function (context) {
  this.m = 0;
  this.interval =
    setInterval(this.drawMountain.bind(this, context, this.blackWhite, true), 10);
};

LogIn.drawMountain = function (context, img, option) {
  if (this.m == this.mountain.length - 2) {
    clearInterval(this.interval);
    if (option) {
      this.r = 0;
      this.Meadow =
        setInterval(this.drawMeadow.bind(this,context, img, true), 10);
    }
  }
  context.clearRect ( 0 , 0 , 600,600 );
  for (var i = 0; i <= this.m; i++) {
    context.save();
    context.beginPath();
    context.moveTo(450, 0);
    context.lineTo(
      this.mountain[i][0],
      this.mountain[i][1]
    )
    context.lineTo(
      this.mountain[i+1][0],
      this.mountain[i+1][1]
    )
    context.lineTo(
      450,
      this.mountain[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
      context,
      this.mountain[this.m][0],
      this.mountain[this.m][1]);
  }
  this.m ++;
}


LogIn.drawPencil = function (context, x , y) {
  context.drawImage(this.pencilImg, x ,y);
};

LogIn.drawMeadow = function (context, img, option) {
  this.m = this.mountain.length - 2;
  this.drawMountain(context, img, false)
  if (this.r == this.rightMeadow.length - 2) {
    clearInterval(this.Meadow);
    if (option) {
      this.l = 0;
      this.lMeadow =
        setInterval(this.drawLeftMeadow.bind(this,context, img, true), 10);
    }
  }
  for (var i = 0; i <= this.r; i++) {
    context.save();
    context.beginPath();
    context.moveTo(450, 0);
    context.lineTo(
      this.rightMeadow[i][0],
      this.rightMeadow[i][1]
    )
    context.lineTo(
      this.rightMeadow[i+1][0],
      this.rightMeadow[i+1][1]
    )
    context.lineTo(
      450,
      this.rightMeadow[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
        context,
        this.rightMeadow[this.r][0],
        this.rightMeadow[this.r][1]
      );
  }
  this.r ++;
}

LogIn.drawLeftMeadow = function (context, img, option) {
  this.r = this.rightMeadow.length - 2;
  this.drawMeadow(context, img, false)
  if (this.l == this.leftMeadow.length - 2) {
    clearInterval(this.lMeadow);
    if (option) {
      this.t = 0;
      this.top =
        setInterval(this.drawTop.bind(this, context, img, true), 10);
    }
  }
  for (var i = 0; i <= this.l; i++) {
    context.save();
    context.beginPath();
    context.moveTo(this.leftMeadow[i][0], this.leftMeadow[i][1]);
    context.lineTo(
      0,
      this.leftMeadow[i][1]
    )
    context.lineTo(
      0,
      this.leftMeadow[i+1][1]
    )
    context.lineTo(
      this.leftMeadow[i+1][0],
      this.leftMeadow[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
        context,
        this.leftMeadow[this.l][0]/2,
        this.leftMeadow[this.l][1]
      );
  }
  this.l ++;
};

LogIn.drawTop = function (context, img, option, repeat) {
  this.l = this.leftMeadow.length - 2;
  this.drawLeftMeadow(context, img, false);
  if (this.t == 20) {
    clearInterval(this.top);
    if (!repeat) {
      setTimeout(this.addColors.bind(this,context), 500);
    }
  }
  var x = this.t * 20;
    context.save();
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(
      0,
      200
    )
    context.lineTo(
      x,
      200
    )
    context.lineTo(
      x,
      0
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  if (option) {
    this.drawPencil(
        context, x, 0
      );
  }
  this.t ++;
};

LogIn.addColors = function (context) {
  this.mC = 0;
  this.cInterval =
    setInterval(this.drawCMountain.bind(this, context, this.color, true), 20);
}


LogIn.drawCMountain = function (context, img, option) {
  context.clearRect ( 0 , 0 , 600,600 );
  if (this.mC == this.mountain.length - 2) {
    clearInterval(this.cInterval);
    if (option) {
      this.rC = 0;
      this.CMeadow =
        setInterval(this.drawCMeadow.bind(this,context, img, true), 10);
    }
  }
  this.t = 20;
  this.drawTop(context, this.blackWhite, false, true)
  for (var i = 0; i <= this.mC; i++) {
    context.save();
    context.beginPath();
    context.moveTo(450, 0);
    context.lineTo(
      this.mountain[i][0],
      this.mountain[i][1]
    )
    context.lineTo(
      this.mountain[i+1][0],
      this.mountain[i+1][1]
    )
    context.lineTo(
      450,
      this.mountain[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
      context,
      this.mountain[this.mC][0],
      this.mountain[this.mC][1]);
  }
  this.mC ++;
}

LogIn.drawCMeadow = function (context, img, option) {
  this.mC = this.mountain.length - 2;
  this.drawCMountain(context, img, false)
  if (this.rC == this.rightMeadow.length - 2) {
    clearInterval(this.CMeadow);
    if (option) {
      this.lC = 0;
      this.lCMeadow =
        setInterval(this.drawCLeftMeadow.bind(this,context, img, true), 10);
    }
  }
  for (var i = 0; i <= this.rC; i++) {
    context.save();
    context.beginPath();
    context.moveTo(450, 0);
    context.lineTo(
      this.rightMeadow[i][0],
      this.rightMeadow[i][1]
    )
    context.lineTo(
      this.rightMeadow[i+1][0],
      this.rightMeadow[i+1][1]
    )
    context.lineTo(
      450,
      this.rightMeadow[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
        context,
        this.rightMeadow[this.rC][0],
        this.rightMeadow[this.rC][1]
      );
  }
  this.rC ++;
}

LogIn.drawCLeftMeadow = function (context, img, option) {
  this.rC = this.rightMeadow.length - 2;
  this.drawCMeadow(context, img, false)
  if (this.lC == this.leftMeadow.length - 2) {
    clearInterval(this.lCMeadow);
    if (option) {
      this.tC = 0;
      this.topC =
        setInterval(this.drawCTop.bind(this, context, img, true), 10);
    }
  }
  for (var i = 0; i <= this.lC; i++) {
    context.save();
    context.beginPath();
    context.moveTo(this.leftMeadow[i][0], this.leftMeadow[i][1]);
    context.lineTo(
      0,
      this.leftMeadow[i][1]
    )
    context.lineTo(
      0,
      this.leftMeadow[i+1][1]
    )
    context.lineTo(
      this.leftMeadow[i+1][0],
      this.leftMeadow[i+1][1]
    )
    context.clip();
    context.drawImage(img,0,0);
    context.restore();
  }
  if (option) {
    this.drawPencil(
        context,
        this.leftMeadow[this.lC][0]/2,
        this.leftMeadow[this.lC][1]
      );
  }
  this.lC ++;
};

LogIn.drawCTop = function (context, img, option, repeat) {
  this.lC = this.leftMeadow.length - 2;
  if (this.tC >= 20 && !repeat) {
    clearInterval(this.topC);
    this.finishedDrawing(context);
  } else {
    this.drawCLeftMeadow(context, img, false);
    var x = this.tC * 20;
      context.save();
      context.beginPath();
      context.moveTo(0,0);
      context.lineTo(
        0,
        200
      )
      context.lineTo(
        x,
        200
      )
      context.lineTo(
        x,
        0
      )
      context.clip();
      context.drawImage(img,0,0);
      context.restore();
    if (option) {
      this.drawPencil(
          context, x, 0
        );
    }
    this.tC ++;
  }
};

LogIn.finishedDrawing = function (context) {
  setTimeout(this.drawCTop.bind(this, context, this.color, false, true), 500);
};
