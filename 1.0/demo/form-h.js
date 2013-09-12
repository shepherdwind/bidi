KISSY.add(function(S, Bidi){

  Bidi.active(['text', 'click', 'class']);

  var form = Bidi.xbind('form-h', {

    reasons: {
      defaultValue: 2,
      values: [
        { value: 1, text: '大小尺寸不符合', descriptions: [11, 12] },
        { value: 2, text: '材料面料不符合', descriptions: [21] },
        { value: 3, text: '工艺手艺问题', descriptions: [31, 32, 33] },
        { value: 4, text: '颜色、款式、图案描述不符', descriptions: [44, 45] },
        { value: 5, text: '颜色、款式、图案描述不符' }
      ]
    },

    descriptions: {
      values: [
        { value: 11, text: '尺寸、尺码不符', jude: true, title: "desc", subs: [11, 12] },
        { value: 12, text: '拼接、走线不齐' },
        { value: 21, text: '材质不符', jude: true, subs: [21, 22, 12] },
        { value: 22, text: '严重缩水、褪色、起球、掉毛' },
        { value: 31, text: '收到商品时有破损' },
        { value: 32, text: '拼接、走线不齐', jude: true },
        { value: 33, text: '开线、走丝', jude: true },
        { value: 44, text: '有污渍' },
        { value: 45, text: '配件破损或不符' }
      ]
    }

  });

  return form;

}, {
  requires: ['../index']
});
