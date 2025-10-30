ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9209").setExtent([553213.629000, 1274226.477000, 556852.987000, 1278113.515845]);
var wms_layers = [];

var format_GitNngNghip_0 = new ol.format.GeoJSON();
var features_GitNngNghip_0 = format_GitNngNghip_0.readFeatures(json_GitNngNghip_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9209'});
var jsonSource_GitNngNghip_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GitNngNghip_0.addFeatures(features_GitNngNghip_0);
var lyr_GitNngNghip_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GitNngNghip_0, 
                style: style_GitNngNghip_0,
                popuplayertitle: 'Giá đất Nông Nghiệp',
                interactive: true,
    title: 'Giá đất Nông Nghiệp<br />\
    <img src="styles/legend/GitNngNghip_0_0.png" /> 84000<br />\
    <img src="styles/legend/GitNngNghip_0_1.png" /> 100000<br />\
    <img src="styles/legend/GitNngNghip_0_2.png" /> 126000<br />\
    <img src="styles/legend/GitNngNghip_0_3.png" /> <br />' });
var format_GitPhiNngNghip_1 = new ol.format.GeoJSON();
var features_GitPhiNngNghip_1 = format_GitPhiNngNghip_1.readFeatures(json_GitPhiNngNghip_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9209'});
var jsonSource_GitPhiNngNghip_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GitPhiNngNghip_1.addFeatures(features_GitPhiNngNghip_1);
var lyr_GitPhiNngNghip_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GitPhiNngNghip_1, 
                style: style_GitPhiNngNghip_1,
                popuplayertitle: 'Giá đất Phi Nông Nghiệp',
                interactive: true,
    title: 'Giá đất Phi Nông Nghiệp<br />\
    <img src="styles/legend/GitPhiNngNghip_1_0.png" /> 200000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_1.png" /> 201600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_2.png" /> 213600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_3.png" /> 220800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_4.png" /> 221760<br />\
    <img src="styles/legend/GitPhiNngNghip_1_5.png" /> 226800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_6.png" /> 228000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_7.png" /> 232800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_8.png" /> 249600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_9.png" /> 254400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_10.png" /> 259200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_11.png" /> 259560<br />\
    <img src="styles/legend/GitPhiNngNghip_1_12.png" /> 268800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_13.png" /> 288000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_14.png" /> 293760<br />\
    <img src="styles/legend/GitPhiNngNghip_1_15.png" /> 295200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_16.png" /> 313200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_17.png" /> 316800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_18.png" /> 336000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_19.png" /> 350400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_20.png" /> 360000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_21.png" /> 364000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_22.png" /> 367200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_23.png" /> 370800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_24.png" /> 380160<br />\
    <img src="styles/legend/GitPhiNngNghip_1_25.png" /> 393600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_26.png" /> 436800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_27.png" /> 445200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_28.png" /> 446400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_29.png" /> 453600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_30.png" /> 470400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_31.png" /> 480000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_32.png" /> 492000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_33.png" /> 494400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_34.png" /> 504000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_35.png" /> 528000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_36.png" /> 540000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_37.png" /> 550800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_38.png" /> 552000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_39.png" /> 554400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_40.png" /> 561600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_41.png" /> 576240<br />\
    <img src="styles/legend/GitPhiNngNghip_1_42.png" /> 588000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_43.png" /> 612000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_44.png" /> 613200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_45.png" /> 624000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_46.png" /> 633600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_47.png" /> 636000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_48.png" /> 648000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_49.png" /> 658800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_50.png" /> 660000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_51.png" /> 672000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_52.png" /> 688800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_53.png" /> 696000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_54.png" /> 720000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_55.png" /> 732000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_56.png" /> 740880<br />\
    <img src="styles/legend/GitPhiNngNghip_1_57.png" /> 744000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_58.png" /> 747600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_59.png" /> 756000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_60.png" /> 764400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_61.png" /> 768000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_62.png" /> 792000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_63.png" /> 798000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_64.png" /> 809760<br />\
    <img src="styles/legend/GitPhiNngNghip_1_65.png" /> 816000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_66.png" /> 823200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_67.png" /> 828000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_68.png" /> 831600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_69.png" /> 840000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_70.png" /> 846000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_71.png" /> 856800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_72.png" /> 864000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_73.png" /> 864360<br />\
    <img src="styles/legend/GitPhiNngNghip_1_74.png" /> 865200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_75.png" /> 867600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_76.png" /> 876000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_77.png" /> 895200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_78.png" /> 900000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_79.png" /> 924000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_80.png" /> 948000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_81.png" /> 949200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_82.png" /> 957600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_83.png" /> 960000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_84.png" /> 984000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_85.png" /> 1041600<br />\
    <img src="styles/legend/GitPhiNngNghip_1_86.png" /> 1044000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_87.png" /> 1068000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_88.png" /> 1092000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_89.png" /> 1108800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_90.png" /> 1116000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_91.png" /> 1140000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_92.png" /> 1156800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_93.png" /> 1164000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_94.png" /> 1176000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_95.png" /> 1188000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_96.png" /> 1200000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_97.png" /> 1215300<br />\
    <img src="styles/legend/GitPhiNngNghip_1_98.png" /> 1224000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_99.png" /> 1234800<br />\
    <img src="styles/legend/GitPhiNngNghip_1_100.png" /> 1236000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_101.png" /> 1248000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_102.png" /> 1260000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_103.png" /> 1272000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_104.png" /> 1279200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_105.png" /> 1356000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_106.png" /> 1368000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_107.png" /> 1380000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_108.png" /> 1395000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_109.png" /> 1404000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_110.png" /> 1428000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_111.png" /> 1488000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_112.png" /> 1560000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_113.png" /> 1620400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_114.png" /> 1680000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_115.png" /> 1788000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_116.png" /> 1790400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_117.png" /> 1800000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_118.png" /> 1836000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_119.png" /> 1848000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_120.png" /> 1860000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_121.png" /> 1940400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_122.png" /> 2024400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_123.png" /> 2196000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_124.png" /> 2400000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_125.png" /> 2558400<br />\
    <img src="styles/legend/GitPhiNngNghip_1_126.png" /> 2640000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_127.png" /> 2772000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_128.png" /> 2835700<br />\
    <img src="styles/legend/GitPhiNngNghip_1_129.png" /> 2881200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_130.png" /> 2892000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_131.png" /> 3133200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_132.png" /> 3255000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_133.png" /> 3960000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_134.png" /> 4051000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_135.png" /> 4116000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_136.png" /> 4476000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_137.png" /> 4477200<br />\
    <img src="styles/legend/GitPhiNngNghip_1_138.png" /> 4650000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_139.png" /> 4848000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_140.png" /> 5880000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_141.png" /> 6396000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_142.png" /> 6636000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_143.png" /> 7872000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_144.png" /> 8400000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_145.png" /> 9480000<br />\
    <img src="styles/legend/GitPhiNngNghip_1_146.png" /> <br />' });
var format_Hintrng_2 = new ol.format.GeoJSON();
var features_Hintrng_2 = format_Hintrng_2.readFeatures(json_Hintrng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9209'});
var jsonSource_Hintrng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hintrng_2.addFeatures(features_Hintrng_2);
var lyr_Hintrng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hintrng_2, 
                style: style_Hintrng_2,
                popuplayertitle: 'Hiện trạng ',
                interactive: true,
    title: 'Hiện trạng <br />\
    <img src="styles/legend/Hintrng_2_0.png" /> <br />\
    <img src="styles/legend/Hintrng_2_1.png" /> Đất bằng trồng cây hàng năm khác<br />\
    <img src="styles/legend/Hintrng_2_2.png" /> Đất an ninh<br />\
    <img src="styles/legend/Hintrng_2_3.png" /> Đất trồng cây lâu năm<br />\
    <img src="styles/legend/Hintrng_2_4.png" /> Đất quốc phòng<br />\
    <img src="styles/legend/Hintrng_2_5.png" /> Đất công trình hạ tầng bưu chính, viễn thông, công nghệ thông tin<br />\
    <img src="styles/legend/Hintrng_2_6.png" /> Đất chợ dân sinh, chợ đầu mối<br />\
    <img src="styles/legend/Hintrng_2_7.png" /> Đất xây dựng cơ sở giáo dục và đào tạo<br />\
    <img src="styles/legend/Hintrng_2_8.png" /> Đất công trình giao thông<br />\
    <img src="styles/legend/Hintrng_2_9.png" /> Đất xây dựng cơ sở khoa học và công nghệ<br />\
    <img src="styles/legend/Hintrng_2_10.png" /> Đất khu vui chơi, giải trí công cộng, sinh hoạt cộng đồng<br />\
    <img src="styles/legend/Hintrng_2_11.png" /> Đất sinh hoạt cộng đồng<br />\
    <img src="styles/legend/Hintrng_2_12.png" /> Đất công trình thủy lợi<br />\
    <img src="styles/legend/Hintrng_2_13.png" /> Đất xây dựng cơ sở thể dục, thể thao<br />\
    <img src="styles/legend/Hintrng_2_14.png" /> Đất xây dựng cơ sở văn hóa<br />\
    <img src="styles/legend/Hintrng_2_15.png" /> Đất xây dựng cơ sở y tế<br />\
    <img src="styles/legend/Hintrng_2_16.png" /> Đất trồng lúa còn lại<br />\
    <img src="styles/legend/Hintrng_2_17.png" /> Đất nương rẫy trồng cây hàng năm khác<br />\
    <img src="styles/legend/Hintrng_2_18.png" /> Đất nuôi trồng thủy sản<br />\
    <img src="styles/legend/Hintrng_2_19.png" /> Đất ở tại đô thị<br />\
    <img src="styles/legend/Hintrng_2_20.png" /> Đất ở tại đô thị + Đất trồng cây lâu <br />\
    <img src="styles/legend/Hintrng_2_21.png" /> Đất ở tại đô thị + Đất bằng trồng cây hàng năm khác<br />\
    <img src="styles/legend/Hintrng_2_22.png" /> Đất ở tại đô thị + Đất trồng cây lâu năm<br />\
    <img src="styles/legend/Hintrng_2_23.png" /> Đất có mặt nước dạng sông, ngòi, kênh, rạch, suối<br />\
    <img src="styles/legend/Hintrng_2_24.png" /> Đất thương mại, dịch vụ<br />\
    <img src="styles/legend/Hintrng_2_25.png" /> Đất tôn giáo<br />\
    <img src="styles/legend/Hintrng_2_26.png" /> Đất xây dựng trụ sở cơ quan<br />' });
var format_Thyh_3 = new ol.format.GeoJSON();
var features_Thyh_3 = format_Thyh_3.readFeatures(json_Thyh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9209'});
var jsonSource_Thyh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thyh_3.addFeatures(features_Thyh_3);
var lyr_Thyh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thyh_3, 
                style: style_Thyh_3,
                popuplayertitle: 'Thủy hệ',
                interactive: false,
                title: '<img src="styles/legend/Thyh_3.png" /> Thủy hệ'
            });
var format_nggiaothng_4 = new ol.format.GeoJSON();
var features_nggiaothng_4 = format_nggiaothng_4.readFeatures(json_nggiaothng_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9209'});
var jsonSource_nggiaothng_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nggiaothng_4.addFeatures(features_nggiaothng_4);
var lyr_nggiaothng_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nggiaothng_4, 
                style: style_nggiaothng_4,
                popuplayertitle: 'Đường giao thông',
                interactive: true,
                title: '<img src="styles/legend/nggiaothng_4.png" /> Đường giao thông'
            });

lyr_GitNngNghip_0.setVisible(false);lyr_GitPhiNngNghip_1.setVisible(true);lyr_Hintrng_2.setVisible(true);lyr_Thyh_3.setVisible(true);lyr_nggiaothng_4.setVisible(true);
var layersList = [lyr_GitNngNghip_0,lyr_GitPhiNngNghip_1,lyr_Hintrng_2,lyr_Thyh_3,lyr_nggiaothng_4];
lyr_GitNngNghip_0.set('fieldAliases', {'soto': 'Số tờ', 'sothua': 'Số thửa', 'CSD': 'Chủ sử dụng', 'Dientich': 'Diện tích', 'Doituong': 'Đối tượng', 'Loaidat': 'Loại đất', 'ODT': 'ODT', 'Duong': 'Đường', 'Doan': 'Đoạn', 'Heso': 'Hệ số', 'ODTgoc': 'ODT gốc', 'Ghichu': 'Ghi chú', 'TMD': 'TMD', 'CSK': 'CSK', 'LUA': 'LUA', 'HNK': 'HNK', 'CLN': 'CLN', 'RSX': 'RSX', 'NTS': 'NTS', 'Vị trí': 'Vị trí', 'To_Thua': 'Tờ_thửa', });
lyr_GitPhiNngNghip_1.set('fieldAliases', {'soto': 'soto', 'sothua': 'sothua', 'CSD': 'CSD', 'Dientich': 'Dientich', 'Doituong': 'Doituong', 'Loaidat': 'Loaidat', 'ODT': 'ODT', 'Duong': 'Duong', 'Doan': 'Doan', 'Heso': 'Heso', 'ODTgoc': 'ODTgoc', 'Ghichu': 'Ghichu', 'TMD': 'TMD', 'CSK': 'CSK', 'LUA': 'LUA', 'HNK': 'HNK', 'CLN': 'CLN', 'RSX': 'RSX', 'NTS': 'NTS', 'Vị trí': 'Vị trí', 'To_Thua': 'To_Thua', });
lyr_Hintrng_2.set('fieldAliases', {'soto': 'Số tờ', 'sothua': 'Số thửa', 'CSD': 'Chủ sử dụng', 'Dientich': 'Diện tích ', 'Doituong': 'Đối tượng', 'Loaidat': 'Loại đất ', 'ODT': 'ODT', 'Duong': 'Đường', 'Doan': 'Đoạn', 'Heso': 'Hệ số ', 'ODTgoc': 'ODT gốc ', 'Ghichu': 'Ghi chú ', 'TMD': 'TMD', 'CSK': 'CSK', 'LUA': 'LUA', 'HNK': 'HNK', 'CLN': 'CLN', 'RSX': 'RSX', 'NTS': 'NTS', 'Vị trí': 'Vị trí', 'To_Thua': 'To_Thua', });
lyr_Thyh_3.set('fieldAliases', {'soto': 'soto', 'sothua': 'sothua', 'CSD': 'CSD', 'Dientich': 'Dientich', 'Doituong': 'Doituong', 'Loaidat': 'Loaidat', 'ODT': 'ODT', 'Duong': 'Duong', 'Doan': 'Doan', 'Heso': 'Heso', 'ODTgoc': 'ODTgoc', 'Ghichu': 'Ghichu', 'TMD': 'TMD', 'CSK': 'CSK', 'LUA': 'LUA', 'HNK': 'HNK', 'CLN': 'CLN', 'RSX': 'RSX', 'NTS': 'NTS', 'Vị trí': 'Vị trí', 'To_Thua': 'To_Thua', });
lyr_nggiaothng_4.set('fieldAliases', {'Tenduong': 'Tên đường', 'Logioi': 'Lộ giới ', 'Doan': 'Đoạn ', 'ODT': 'ODT', 'Loaiduong': 'Loại đường ', });
lyr_GitNngNghip_0.set('fieldImages', {'soto': 'TextEdit', 'sothua': 'TextEdit', 'CSD': 'TextEdit', 'Dientich': 'TextEdit', 'Doituong': 'TextEdit', 'Loaidat': 'TextEdit', 'ODT': 'TextEdit', 'Duong': 'TextEdit', 'Doan': 'TextEdit', 'Heso': 'TextEdit', 'ODTgoc': 'TextEdit', 'Ghichu': 'TextEdit', 'TMD': 'TextEdit', 'CSK': 'TextEdit', 'LUA': 'TextEdit', 'HNK': 'TextEdit', 'CLN': 'TextEdit', 'RSX': 'TextEdit', 'NTS': 'TextEdit', 'Vị trí': 'TextEdit', 'To_Thua': 'TextEdit', });
lyr_GitPhiNngNghip_1.set('fieldImages', {'soto': 'TextEdit', 'sothua': 'TextEdit', 'CSD': 'TextEdit', 'Dientich': 'TextEdit', 'Doituong': 'TextEdit', 'Loaidat': 'TextEdit', 'ODT': 'TextEdit', 'Duong': 'TextEdit', 'Doan': 'TextEdit', 'Heso': 'TextEdit', 'ODTgoc': 'TextEdit', 'Ghichu': 'TextEdit', 'TMD': 'TextEdit', 'CSK': 'TextEdit', 'LUA': 'TextEdit', 'HNK': 'TextEdit', 'CLN': 'TextEdit', 'RSX': 'TextEdit', 'NTS': 'TextEdit', 'Vị trí': 'TextEdit', 'To_Thua': 'TextEdit', });
lyr_Hintrng_2.set('fieldImages', {'soto': 'TextEdit', 'sothua': 'TextEdit', 'CSD': 'TextEdit', 'Dientich': 'TextEdit', 'Doituong': 'TextEdit', 'Loaidat': 'TextEdit', 'ODT': 'TextEdit', 'Duong': 'TextEdit', 'Doan': 'TextEdit', 'Heso': 'TextEdit', 'ODTgoc': 'TextEdit', 'Ghichu': 'TextEdit', 'TMD': 'TextEdit', 'CSK': 'TextEdit', 'LUA': 'TextEdit', 'HNK': 'TextEdit', 'CLN': 'TextEdit', 'RSX': 'TextEdit', 'NTS': 'TextEdit', 'Vị trí': 'TextEdit', 'To_Thua': 'TextEdit', });
lyr_Thyh_3.set('fieldImages', {'soto': 'TextEdit', 'sothua': 'TextEdit', 'CSD': 'TextEdit', 'Dientich': 'TextEdit', 'Doituong': 'TextEdit', 'Loaidat': 'TextEdit', 'ODT': 'TextEdit', 'Duong': 'TextEdit', 'Doan': 'TextEdit', 'Heso': 'TextEdit', 'ODTgoc': 'TextEdit', 'Ghichu': 'TextEdit', 'TMD': 'TextEdit', 'CSK': 'TextEdit', 'LUA': 'TextEdit', 'HNK': 'TextEdit', 'CLN': 'TextEdit', 'RSX': 'TextEdit', 'NTS': 'TextEdit', 'Vị trí': 'TextEdit', 'To_Thua': 'TextEdit', });
lyr_nggiaothng_4.set('fieldImages', {'Tenduong': 'TextEdit', 'Logioi': 'TextEdit', 'Doan': 'TextEdit', 'ODT': 'TextEdit', 'Loaiduong': 'TextEdit', });
lyr_GitNngNghip_0.set('fieldLabels', {'soto': 'hidden field', 'sothua': 'hidden field', 'CSD': 'inline label - visible with data', 'Dientich': 'inline label - visible with data', 'Doituong': 'hidden field', 'Loaidat': 'hidden field', 'ODT': 'hidden field', 'Duong': 'hidden field', 'Doan': 'hidden field', 'Heso': 'hidden field', 'ODTgoc': 'hidden field', 'Ghichu': 'hidden field', 'TMD': 'hidden field', 'CSK': 'hidden field', 'LUA': 'hidden field', 'HNK': 'hidden field', 'CLN': 'hidden field', 'RSX': 'hidden field', 'NTS': 'hidden field', 'Vị trí': 'inline label - visible with data', 'To_Thua': 'inline label - visible with data', });
lyr_GitPhiNngNghip_1.set('fieldLabels', {'soto': 'hidden field', 'sothua': 'hidden field', 'CSD': 'inline label - visible with data', 'Dientich': 'inline label - visible with data', 'Doituong': 'hidden field', 'Loaidat': 'hidden field', 'ODT': 'hidden field', 'Duong': 'hidden field', 'Doan': 'hidden field', 'Heso': 'inline label - visible with data', 'ODTgoc': 'hidden field', 'Ghichu': 'inline label - visible with data', 'TMD': 'hidden field', 'CSK': 'hidden field', 'LUA': 'hidden field', 'HNK': 'hidden field', 'CLN': 'hidden field', 'RSX': 'hidden field', 'NTS': 'hidden field', 'Vị trí': 'hidden field', 'To_Thua': 'inline label - visible with data', });
lyr_Hintrng_2.set('fieldLabels', {'soto': 'inline label - visible with data', 'sothua': 'inline label - visible with data', 'CSD': 'inline label - visible with data', 'Dientich': 'inline label - visible with data', 'Doituong': 'inline label - visible with data', 'Loaidat': 'inline label - visible with data', 'ODT': 'inline label - visible with data', 'Duong': 'inline label - visible with data', 'Doan': 'inline label - visible with data', 'Heso': 'hidden field', 'ODTgoc': 'inline label - visible with data', 'Ghichu': 'hidden field', 'TMD': 'inline label - visible with data', 'CSK': 'inline label - visible with data', 'LUA': 'inline label - visible with data', 'HNK': 'inline label - visible with data', 'CLN': 'inline label - visible with data', 'RSX': 'inline label - visible with data', 'NTS': 'inline label - visible with data', 'Vị trí': 'hidden field', 'To_Thua': 'hidden field', });
lyr_Thyh_3.set('fieldLabels', {'soto': 'hidden field', 'sothua': 'hidden field', 'CSD': 'hidden field', 'Dientich': 'hidden field', 'Doituong': 'hidden field', 'Loaidat': 'hidden field', 'ODT': 'hidden field', 'Duong': 'hidden field', 'Doan': 'hidden field', 'Heso': 'hidden field', 'ODTgoc': 'hidden field', 'Ghichu': 'hidden field', 'TMD': 'hidden field', 'CSK': 'hidden field', 'LUA': 'hidden field', 'HNK': 'hidden field', 'CLN': 'hidden field', 'RSX': 'hidden field', 'NTS': 'hidden field', 'Vị trí': 'hidden field', 'To_Thua': 'hidden field', });
lyr_nggiaothng_4.set('fieldLabels', {'Tenduong': 'inline label - visible with data', 'Logioi': 'inline label - visible with data', 'Doan': 'inline label - visible with data', 'ODT': 'inline label - visible with data', 'Loaiduong': 'inline label - visible with data', });
lyr_nggiaothng_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});