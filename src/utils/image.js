import Taro from "@tarojs/taro";

export function saveCanvas(image) {

  Taro.showLoading({
    title: "加载中..."
  });

  const fsm = Taro.getFileSystemManager();
  fsm.writeFile({
    filePath: Taro.env.USER_DATA_PATH + "/code.png",
    data: image.slice(22),
    encoding: "base64",
    success: () => {
      const ctx = Taro.createCanvasContext("shareImg");
      ctx.drawImage(Taro.env.USER_DATA_PATH + "/code.png", 67, 190, 240, 240);

      ctx.draw(false, () => {
        Taro.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: 375,
          height: 600,
          destWidth: 375,
          destHeight: 600,
          canvasId: "shareImg",
          success: res => {
            Taro.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: () => {
                Taro.hideLoading();
                Taro.showToast({
                  title: "保存成功"
                });
              },
              fail: () => {
                Taro.hideLoading();
              }
            });
          },
          fail: res => {
            Taro.hideLoading();
            console.log(res);
          }
        });
      });
    }
  });
}