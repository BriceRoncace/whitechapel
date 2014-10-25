function Node(options) {
  var self = this;

  self.id = options.id;
  self.connections = options.connections;
  self.adjacentNodes = options.adjacentNodes.sort();
  ascendingNumericSort(self.adjacentNodes);

  function ascendingNumericSort(list) {
    list.sort(function(a,b){return a - b; });
  };

  self.numberOfAdjacentNodes = function() {
    //console.log(self.adjacentNodes);
    return self.adjacentNodes.length;
  };
  
  self.numberOfConnections = function() {
    return self.connections;
  };
};

var n1 = new Node({id:1, adjacentNodes: [24,6,7,26,2,9,8,28], connections:2 });
var n2 = new Node({id:2, adjacentNodes: [1,26,28,8,9,11,3], connections:2 });
var n3 = new Node({id:3, adjacentNodes: [2,9,11,4,5], connections:2 });
var n4 = new Node({id:4, adjacentNodes: [3,5,11,12,10,30], connections:2 });
var n5 = new Node({id:5, adjacentNodes: [3,4,12,13,15,16,17], connections:2 });
var n6 = new Node({id:6, adjacentNodes: [24,25,44,1,7,26], connections:2 });
var n7 = new Node({id:7, adjacentNodes: [24,25,44,6,1,26], connections:2 });
var n8 = new Node({id:8, adjacentNodes: [26,28,1,2,9,10], connections:2 });
var n9 = new Node({id:9, adjacentNodes: [2,3,11,10,8,1,26,28], connections:3 });
var n10 = new Node({id:10, adjacentNodes: [8,9,11,12,4,30], connections:2 });
var n11 = new Node({id:11, adjacentNodes: [2,3,4,12,10,30,9], connections:2 });
var n12 = new Node({id:12, adjacentNodes: [11,4,5,13,10,30], connections:2 });
var n13 = new Node({id:13, adjacentNodes: [12,5,30,32,14,15,16,17], connections:2 });
var n14 = new Node({id:14, adjacentNodes: [30,13,32,31,33,54,52], connections:2 });
var n15 = new Node({id:15, adjacentNodes: [5,12,13,16,17,33,34,35,36], connections:2 });
var n16 = new Node({id:16, adjacentNodes: [5,12,13,15,17,33,34,35,36], connections:2 });
var n17 = new Node({id:17, adjacentNodes: [5,12,13,15,16,36,38,18], connections:2 });
var n18 = new Node({id:18, adjacentNodes: [17,36,38,39,19,20], connections:3 });
var n19 = new Node({id:19, adjacentNodes: [39,18,20], connections:2 });
var n20 = new Node({id:20, adjacentNodes: [18,19,40,41,42,21], connections:2 });
var n21 = new Node({id:21, adjacentNodes: [20,40,41,42,23], connections:2 });
var n22 = new Node({id:22, adjacentNodes: [42,23,77], connections:2 });
var n23 = new Node({id:23, adjacentNodes: [22,77,21], connections:2 });
var n24 = new Node({id:24, adjacentNodes: [1,7,6,26,44,25,43,59], connections:3 });
var n25 = new Node({id:25, adjacentNodes: [24,6,7,26,44,43,59], connections:3 });
var n26 = new Node({id:26, adjacentNodes: [24,6,7,1,2,9,8,28,27,46,79,44,25,24], connections:5 });
var n27 = new Node({id:27, adjacentNodes: [44,26,28,29,48,47,45,46,79], connections:2 });
var n28 = new Node({id:28, adjacentNodes: [26,1,2,9,8,29,48,45,47,46,27], connections:2 });
var n29 = new Node({id:29, adjacentNodes: [28,30,50,66,64,49,48,47,45,46], connections:2 });
var n30 = new Node({id:30, adjacentNodes: [10,11,4,12,13,14,32,50,66,64,49,29], connections:3 });
var n31 = new Node({id:31, adjacentNodes: [50,32,14,33,54,52,51], connections:3 });
var n32 = new Node({id:32, adjacentNodes: [30,13,14,33,54,52,31], connections:2 });
var n33 = new Node({id:33, adjacentNodes: [31,32,14,15,16,36,35,34,54,52], connections:2 });
var n34 = new Node({id:34, adjacentNodes: [33,15,16,36,35,37,55,68,53,54], connections:2 });
var n35 = new Node({id:35, adjacentNodes: [33,15,16,36,37,55,34,54,68,53], connections:2 });
var n36 = new Node({id:36, adjacentNodes: [33,15,16,17,18,38,35,34], connections:2 });
var n37 = new Node({id:37, adjacentNodes: [53,54,34,35,38,39,55,68], connections:2 });
var n38 = new Node({id:38, adjacentNodes: [17,18,36,39,37], connections:2 });
var n39 = new Node({id:39, adjacentNodes: [37,38,18,19,56], connections:3 });
var n40 = new Node({id:40, adjacentNodes: [20,21,42,41,58,73,57], connections:2 });
var n41 = new Node({id:41, adjacentNodes: [20,21,42,40,58,73,57], connections:2 });
var n42 = new Node({id:42, adjacentNodes: [20,40,41,21,22,58,73,57], connections:2 });
var n43 = new Node({id:43, adjacentNodes: [24,25,44,59], connections:2 });
var n44 = new Node({id:44, adjacentNodes: [43,24,25,6,7,26,27,46,79,59], connections:5 });
var n45 = new Node({id:45, adjacentNodes: [46,27,28,29,48,47,61], connections:2 });
var n46 = new Node({id:46, adjacentNodes: [44,26,27,28,29,48,47,45,79], connections:3 });
var n47 = new Node({id:47, adjacentNodes: [45,46,27,28,29,48,61], connections:2 });
var n48 = new Node({id:48, adjacentNodes: [47,45,46,27,28,29,49,64,63,62], connections:3 });
var n49 = new Node({id:49, adjacentNodes: [48,29,30,50,66,64,63,62], connections:2 });
var n50 = new Node({id:50, adjacentNodes: [29,30,31,52,51,66,64,49], connections:3 });
var n51 = new Node({id:51, adjacentNodes: [50,31,52,67,84,65,66], connections:2 });
var n52 = new Node({id:52, adjacentNodes: [50,31,32,14,33,54,53,67,51], connections:4 });
var n53 = new Node({id:53, adjacentNodes: [67,52,54,34,35,37,55,68], connections:2 });
var n54 = new Node({id:54, adjacentNodes: [52,31,32,14,33,34,35,37,55,68,53], connections:3 });
var n55 = new Node({id:55, adjacentNodes: [53,54,34,35,37,56,68,69,102,86], connections:2 });
var n56 = new Node({id:56, adjacentNodes: [86,68,55,39,57,69,102], connections:3 });
var n57 = new Node({id:57, adjacentNodes: [56,40,41,42,58,73], connections:2 });
var n58 = new Node({id:58, adjacentNodes: [57,40,41,42,73,74,75,76], connections:3 });
var n59 = new Node({id:59, adjacentNodes: [43,24,25,44,60,78,96,95], connections:2 });
var n60 = new Node({id:60, adjacentNodes: [59,79,78,96,95], connections:2 });
var n61 = new Node({id:61, adjacentNodes: [45,47], connections:2 });
var n62 = new Node({id:62, adjacentNodes: [48,49,64,63,82,98,80], connections:2 });
var n63 = new Node({id:63, adjacentNodes: [48,49,64,62,65,82], connections:2 });
var n64 = new Node({id:64, adjacentNodes: [48,49,29,30,50,66,63,62], connections:2 });
var n65 = new Node({id:65, adjacentNodes: [82,63,66,51,67,84,83], connections:3 });
var n66 = new Node({id:66, adjacentNodes: [64,49,29,30,50,51,67,84,65], connections:2 });
var n67 = new Node({id:67, adjacentNodes: [65,66,51,52,53,84], connections:2 });
var n68 = new Node({id:68, adjacentNodes: [53,54,34,35,37,55,56,69,102,86], connections:2 });
var n69 = new Node({id:69, adjacentNodes: [86,68,55,56,70,103,127,102], connections:3 });
var n70 = new Node({id:70, adjacentNodes: [69,71,87,103], connections:2 });
var n71 = new Node({id:71, adjacentNodes: [70,72,88,104,87], connections:3 });
var n72 = new Node({id:72, adjacentNodes: [71,73,74,90,89,88], connections:2 });
var n73 = new Node({id:73, adjacentNodes: [57,40,41,42,58,76,75,74,90,89,72], connections:3 });
var n74 = new Node({id:74, adjacentNodes: [72,73,58,76,76,75,90,89], connections:2 });
var n75 = new Node({id:75, adjacentNodes: [74,73,58,76,77,94,93,92,91,90], connections:2 });
var n76 = new Node({id:76, adjacentNodes: [74,73,58,77,94,93,92,91,90,75], connections:2 });
var n77 = new Node({id:77, adjacentNodes: [76,22,23,94,93,92,91,90,75], connections:2 });
var n78 = new Node({id:78, adjacentNodes: [95,59,60,79,80,97,96], connections:3 });
var n79 = new Node({id:79, adjacentNodes: [60,44,26,27,46,80,97,78], connections:3 });
var n80 = new Node({id:80, adjacentNodes: [78,79,62,82,98,81,97], connections:3 });
var n81 = new Node({id:81, adjacentNodes: [80,118], connections:2 });
var n82 = new Node({id:82, adjacentNodes: [80,62,63,65,83,98], connections:2 });
var n83 = new Node({id:83, adjacentNodes: [82,63,65,99,100,120], connections:2 });
var n84 = new Node({id:84, adjacentNodes: [65,66,51,67,86,85,100,99], connections:2 });
var n85 = new Node({id:85, adjacentNodes: [99,84,86,101,126,124,100], connections:2 });
var n86 = new Node({id:86, adjacentNodes: [100,99,84,68,55,56,69,102,85], connections:2 });
var n87 = new Node({id:87, adjacentNodes: [70,71,104,129], connections:2 });
var n88 = new Node({id:88, adjacentNodes: [71,72,105,130,104], connections:2 });
var n89 = new Node({id:89, adjacentNodes: [72,73,74,90,91,107,106,105], connections:2 });
var n90 = new Node({id:90, adjacentNodes: [72,73,74,75,76,77,94,93,92,91,89], connections:2 });
var n91 = new Node({id:91, adjacentNodes: [89,90,75,76,77,94,93,92,107,106,105], connections:2 });
var n92 = new Node({id:92, adjacentNodes: [91,90,75,76,77,94,93,109,110,132,108,107], connections:2 });
var n93 = new Node({id:93, adjacentNodes: [91,90,75,76,77,94,111,110,109,92], connections:2 });
var n94 = new Node({id:94, adjacentNodes: [90,75,76,77,111,110,109,93,92,91], connections:2 });
var n95 = new Node({id:95, adjacentNodes: [59,60,78,96,114,113,112], connections:2 });
var n96 = new Node({id:96, adjacentNodes: [95,59,60,78,97,116,115,114,113,112], connections:3 });
var n97 = new Node({id:97, adjacentNodes: [78,79,80,117,116,115,96], connections:3 });
var n98 = new Node({id:98, adjacentNodes: [80,62,82,120,122,123,121,119,118], connections:2 });
var n99 = new Node({id:99, adjacentNodes: [83,84,86,85,100,120], connections:2 });
var n100 = new Node({id:100, adjacentNodes: [83,99,84,86,85,124,125,155,141,170,140,123,122,120], connections:3 });
var n101 = new Node({id:101, adjacentNodes: [85,102,127,143,142,156,125,126,124], connections:2 });
var n102 = new Node({id:102, adjacentNodes: [86,68,55,56,69,127,143,142,156,125,126,101], connections:2 });
var n103 = new Node({id:103, adjacentNodes: [69,70,128,127], connections:2 });
var n104 = new Node({id:104, adjacentNodes: [87,71,88,105,130,145,129], connections:4 });
var n105 = new Node({id:105, adjacentNodes: [104,88,89,91,107,106,130], connections:2 });
var n106 = new Node({id:106, adjacentNodes: [105,89,91,107,108,132,134,133,131], connections:2 });
var n107 = new Node({id:107, adjacentNodes: [105,89,91,92,109,110,132,108,106], connections:2 });
var n108 = new Node({id:108, adjacentNodes: [106,107,92,109,110,132,134,133,131], connections:2 });
var n109 = new Node({id:109, adjacentNodes: [107,92,93,94,111,110,132,108], connections:2 });
var n110 = new Node({id:110, adjacentNodes: [108,107,92,109,93,94,111,132], connections:2 });
var n111 = new Node({id:111, adjacentNodes: [110,109,93,94,147,134], connections:2 });
var n112 = new Node({id:112, adjacentNodes: [95,96,114,113,135,148,162], connections:2 });
var n113 = new Node({id:113, adjacentNodes: [112,95,96,114,137,138,136,148,135], connections:2 });
var n114 = new Node({id:114, adjacentNodes: [95,96,115,137,138,136,148,135,113], connections:3 });
var n115 = new Node({id:115, adjacentNodes: [114,96,97,116,137], connections:2 });
var n116 = new Node({id:116, adjacentNodes: [96,97,117,118,151,150,139,115], connections:2 });
var n117 = new Node({id:117, adjacentNodes: [97,118,151,150,139,116], connections:2 });
var n118 = new Node({id:118, adjacentNodes: [139,116,117,81,98,120,122,123,121,119,151,150], connections:3 });
var n119 = new Node({id:119, adjacentNodes: [118,98,120,122,123,121,153,151], connections:2 });
var n120 = new Node({id:120, adjacentNodes: [118,98,83,99,100,122,123,121,119], connections:2 });
var n121 = new Node({id:121, adjacentNodes: [119,118,98,120,122,123,153,151], connections:3 });
var n122 = new Node({id:122, adjacentNodes: [118,98,120,100,124,125,155,141,170,140,123,121,119], connections:2 });
var n123 = new Node({id:123, adjacentNodes: [118,98,120,122,100,124,125,155,141,170,140,121,119], connections:2 });
var n124 = new Node({id:124, adjacentNodes: [123,122,100,125,155,141,170,140], connections:2 });
var n125 = new Node({id:125, adjacentNodes: [123,122,100,124,126,101,102,127,143,142,156,155,141,170,140], connections:2 });
var n126 = new Node({id:126, adjacentNodes: [124,85,101,102,127,143,142,156,125], connections:3 });
var n127 = new Node({id:127, adjacentNodes: [126,101,102,69,103,128,143,142,156,125], connections:3 });
var n128 = new Node({id:128, adjacentNodes: [127,103,144,159,143], connections:2 });
var n129 = new Node({id:129, adjacentNodes: [87,104,145,160,173,159,144], connections:2 });
var n130 = new Node({id:130, adjacentNodes: [104,88,105,131,146,161,145], connections:2 });
var n131 = new Node({id:131, adjacentNodes: [106,108,132,134,133,146,161,145,130], connections:2 });
var n132 = new Node({id:132, adjacentNodes: [108,107,92,109,110,134,133,131], connections:2 });
var n133 = new Node({id:133, adjacentNodes: [106,108,132,134,147,146,131], connections:2 });
var n134 = new Node({id:134, adjacentNodes: [106,108,132,111,147,133,131], connections:2 });
var n135 = new Node({id:135, adjacentNodes: [112,113,114,137,138,136,148,162], connections:2 });
var n136 = new Node({id:136, adjacentNodes: [135,113,114,137,138,139,164,174,163,149,148], connections:2 });
var n137 = new Node({id:137, adjacentNodes: [113,114,115,138,136,148,135], connections:2 });
var n138 = new Node({id:138, adjacentNodes: [135,113,114,137,139,164,174,163,149,136], connections:2 });
var n139 = new Node({id:139, adjacentNodes: [163,149,136,138,116,117,118,151,150,164,174], connections:2 });
var n140 = new Node({id:140, adjacentNodes: [152,153,123,122,100,124,125,155,141,170,154], connections:2 });
var n141 = new Node({id:141, adjacentNodes: [140,123,122,100,124,125,155,170,140], connections:2 });
var n142 = new Node({id:142, adjacentNodes: [125,126,101,102,127,143,158,156], connections:2 });
var n143 = new Node({id:143, adjacentNodes: [125,126,101,102,127,128,144,159,158,142,156], connections:4 });
var n144 = new Node({id:144, adjacentNodes: [143,128,129,145,160,173,159], connections:2 });
var n145 = new Node({id:145, adjacentNodes: [144,104,130,131,146,161,160,173,159], connections:4 });
var n146 = new Node({id:146, adjacentNodes: [145,130,131,133,147,161], connections:2 });
var n147 = new Node({id:147, adjacentNodes: [146,133,134,111], connections:2 });
var n148 = new Node({id:148, adjacentNodes: [112,132,113,114,137,138,136,149,163,162], connections:3 });
var n149 = new Node({id:149, adjacentNodes: [148,136,138,139,164,174,163,162], connections:2 });
var n150 = new Node({id:150, adjacentNodes: [139,116,117,118,151,166,176], connections:2 });
var n151 = new Node({id:151, adjacentNodes: [150,139,116,117,118,119,121,153,166,176], connections:3 });
var n152 = new Node({id:152, adjacentNodes: [166,153,140,154,168,180,167,178,177,165], connections:2 });
var n153 = new Node({id:153, adjacentNodes: [151,119,121,140,154,168,180,152], connections:2 });
var n154 = new Node({id:154, adjacentNodes: [152,153,140,170,169,168], connections:2 });
var n155 = new Node({id:155, adjacentNodes: [141,123,122,100,124,125,182,181,170], connections:2 });
var n156 = new Node({id:156, adjacentNodes: [125,126,101,102,127,143,142,157,171,183], connections:2 });
var n157 = new Node({id:157, adjacentNodes: [156,158,159,172,185,171,183], connections:2 });
var n158 = new Node({id:158, adjacentNodes: [142,143,159,172,185,183,171,157], connections:2 });
var n159 = new Node({id:159, adjacentNodes: [157,158,143,128,144,129,145,160,173,195,187,185,172,183,171], connections:4 });
var n160 = new Node({id:160, adjacentNodes: [159,144,129,145,161,173], connections:3 });
var n161 = new Node({id:161, adjacentNodes: [145,130,131,146,160], connections:3 });
var n162 = new Node({id:162, adjacentNodes: [112,148,135,149,163], connections:2 });
var n163 = new Node({id:163, adjacentNodes: [162,148,149,136,138,139,164,174], connections:2 });
var n164 = new Node({id:164, adjacentNodes: [163,149,136,138,139,175,188,174], connections:3 });
var n165 = new Node({id:165, adjacentNodes: [166,152,167,178,177,189], connections:2 });
var n166 = new Node({id:166, adjacentNodes: [150,151,152,167,178,177,165,176], connections:2 });
var n167 = new Node({id:167, adjacentNodes: [165,166,152,179,178,177], connections:2 });
var n168 = new Node({id:168, adjacentNodes: [152,153,140,154,170,169,180], connections:2 });
var n169 = new Node({id:169, adjacentNodes: [168,154,170,181,191,180], connections:2 });
var n170 = new Node({id:170, adjacentNodes: [168,154,140,123,122,100,124,125,141,155,182,181,169], connections:3 });
var n171 = new Node({id:171, adjacentNodes: [156,157,158,159,172,185,183], connections:2 });
var n172 = new Node({id:172, adjacentNodes: [157,158,159,173,195,187,185,183,171], connections:2 });
var n173 = new Node({id:173, adjacentNodes: [159,144,129,145,160,195,187,172,185], connections:2 });
var n174 = new Node({id:174, adjacentNodes: [163,149,136,138,139,164,175,188], connections:2 });
var n175 = new Node({id:175, adjacentNodes: [174,164,176,190,188], connections:2 });
var n176 = new Node({id:176, adjacentNodes: [150,151,166,190,188,175], connections:2 });
var n177 = new Node({id:177, adjacentNodes: [165,166,152,167,178,189], connections:2 });
var n178 = new Node({id:178, adjacentNodes: [165,177,166,152,167,179,191,190,189], connections:4 });
var n179 = new Node({id:179, adjacentNodes: [189,178,167,191,190], connections:2 });
var n180 = new Node({id:180, adjacentNodes: [152,153,140,168,169,181,191], connections:2 });
var n181 = new Node({id:181, adjacentNodes: [191,180,169,170,155,182], connections:2 });
var n182 = new Node({id:182, adjacentNodes: [181,170,155,183,192], connections:2 });
var n183 = new Node({id:183, adjacentNodes: [156,157,171,158,185,186,193,184,192,182], connections:4 });
var n184 = new Node({id:184, adjacentNodes: [183,185,186,193,194,192,182], connections:2 });
var n185 = new Node({id:185, adjacentNodes: [183,171,157,158,159,172,173,195,187,186,193,184,182], connections:5 });
var n186 = new Node({id:186, adjacentNodes: [183,185,187,195,194,193,184,192,182], connections:2 });
var n187 = new Node({id:187, adjacentNodes: [185,172,159,173,195,194,193,186], connections:2 });
var n188 = new Node({id:188, adjacentNodes: [174,164,175,176,190], connections:2 });
var n189 = new Node({id:189, adjacentNodes: [165,177,178,179,191,190], connections:2 });
var n190 = new Node({id:190, adjacentNodes: [188,175,176,189,178,179,191], connections:2 });
var n191 = new Node({id:191, adjacentNodes: [190,189,178,179,180,169,181], connections:2 });
var n192 = new Node({id:192, adjacentNodes: [182,183,184,193,194], connections:2 });
var n193 = new Node({id:193, adjacentNodes: [182,183,185,186,187,195,194,184,192], connections:3 });
var n194 = new Node({id:194, adjacentNodes: [192,184,193,186,187,195], connections:2 });
var n195 = new Node({id:195, adjacentNodes: [194,193,186,187,185,172,159,173], connections:2 });

function getSortedNodes() {
  function sortNodesBasedOnNumberOfAdjacentNodes(node1, node2) {
    if (node1.numberOfAdjacentNodes() ===  node2.numberOfAdjacentNodes()) {
      if (node1.numberOfConnections() >= node2.numberOfConnections()) {
        return -1;
      }
      else {
        return 1;
      }
    }

    if (node1.numberOfAdjacentNodes() > node2.numberOfAdjacentNodes()) {
      return -1;
    }
    else {
      return 1;
    }
  }
  
  
  var nodes = [];
  nodes.push(n1);
  nodes.push(n2);
  nodes.push(n3);
  nodes.push(n4);
  nodes.push(n5);
  nodes.push(n6);
  nodes.push(n7);
  nodes.push(n8);
  nodes.push(n9);
  nodes.push(n10);
  nodes.push(n11);
  nodes.push(n12);
  nodes.push(n13);
  nodes.push(n14);
  nodes.push(n15);
  nodes.push(n16);
  nodes.push(n17);
  nodes.push(n18);
  nodes.push(n19);
  nodes.push(n20);
  nodes.push(n21);
  nodes.push(n22);
  nodes.push(n23);
  nodes.push(n24);
  nodes.push(n25);
  nodes.push(n26);
  nodes.push(n27);
  nodes.push(n28);
  nodes.push(n29);
  nodes.push(n30);
  nodes.push(n31);
  nodes.push(n32);
  nodes.push(n33);
  nodes.push(n34);
  nodes.push(n35);
  nodes.push(n36);
  nodes.push(n37);
  nodes.push(n38);
  nodes.push(n39);
  nodes.push(n40);
  nodes.push(n41);
  nodes.push(n42);
  nodes.push(n43);
  nodes.push(n44);
  nodes.push(n45);
  nodes.push(n46);
  nodes.push(n47);
  nodes.push(n48);
  nodes.push(n49);
  nodes.push(n50);
  nodes.push(n51);
  nodes.push(n52);
  nodes.push(n53);
  nodes.push(n54);
  nodes.push(n55);
  nodes.push(n56);
  nodes.push(n57);
  nodes.push(n58);
  nodes.push(n59);
  nodes.push(n60);
  nodes.push(n61);
  nodes.push(n62);
  nodes.push(n63);
  nodes.push(n64);
  nodes.push(n65);
  nodes.push(n66);
  nodes.push(n67);
  nodes.push(n68);
  nodes.push(n69);
  nodes.push(n70);
  nodes.push(n71);
  nodes.push(n72);
  nodes.push(n73);
  nodes.push(n74);
  nodes.push(n75);
  nodes.push(n76);
  nodes.push(n77);
  nodes.push(n78);
  nodes.push(n79);
  nodes.push(n80);
  nodes.push(n81);
  nodes.push(n82);
  nodes.push(n83);
  nodes.push(n84);
  nodes.push(n85);
  nodes.push(n86);
  nodes.push(n87);
  nodes.push(n88);
  nodes.push(n89);
  nodes.push(n90);
  nodes.push(n91);
  nodes.push(n92);
  nodes.push(n93);
  nodes.push(n94);
  nodes.push(n95);
  nodes.push(n96);
  nodes.push(n97);
  nodes.push(n98);
  nodes.push(n99);
  nodes.push(n100);
  nodes.push(n101);
  nodes.push(n102);
  nodes.push(n103);
  nodes.push(n104);
  nodes.push(n105);
  nodes.push(n106);
  nodes.push(n107);
  nodes.push(n108);
  nodes.push(n109);
  nodes.push(n110);
  nodes.push(n111);
  nodes.push(n112);
  nodes.push(n113);
  nodes.push(n114);
  nodes.push(n115);
  nodes.push(n116);
  nodes.push(n117);
  nodes.push(n118);
  nodes.push(n119);
  nodes.push(n120);
  nodes.push(n121);
  nodes.push(n122);
  nodes.push(n123);
  nodes.push(n124);
  nodes.push(n125);
  nodes.push(n126);
  nodes.push(n127);
  nodes.push(n128);
  nodes.push(n129);
  nodes.push(n130);
  nodes.push(n131);
  nodes.push(n132);
  nodes.push(n133);
  nodes.push(n134);
  nodes.push(n135);
  nodes.push(n136);
  nodes.push(n137);
  nodes.push(n138);
  nodes.push(n139);
  nodes.push(n140);
  nodes.push(n141);
  nodes.push(n142);
  nodes.push(n143);
  nodes.push(n144);
  nodes.push(n145);
  nodes.push(n146);
  nodes.push(n147);
  nodes.push(n148);
  nodes.push(n149);
  nodes.push(n150);
  nodes.push(n151);
  nodes.push(n152);
  nodes.push(n153);
  nodes.push(n154);
  nodes.push(n155);
  nodes.push(n156);
  nodes.push(n157);
  nodes.push(n158);
  nodes.push(n159);
  nodes.push(n160);
  nodes.push(n161);
  nodes.push(n162);
  nodes.push(n163);
  nodes.push(n164);
  nodes.push(n165);
  nodes.push(n166);
  nodes.push(n167);
  nodes.push(n168);
  nodes.push(n169);
  nodes.push(n170);
  nodes.push(n171);
  nodes.push(n172);
  nodes.push(n173);
  nodes.push(n174);
  nodes.push(n175);
  nodes.push(n176);
  nodes.push(n177);
  nodes.push(n178);
  nodes.push(n179);
  nodes.push(n180);
  nodes.push(n181);
  nodes.push(n182);
  nodes.push(n183);
  nodes.push(n184);
  nodes.push(n185);
  nodes.push(n186);
  nodes.push(n187);
  nodes.push(n188);
  nodes.push(n189);
  nodes.push(n190);
  nodes.push(n191);
  nodes.push(n192);
  nodes.push(n193);
  nodes.push(n194);
  nodes.push(n195);
  
  nodes.sort(sortNodesBasedOnNumberOfAdjacentNodes);
  return nodes;
}