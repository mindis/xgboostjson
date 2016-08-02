module.exports = {predict: function(d){return 1/(1+Math.exp(-this.boosters.map(function(x){return x.predict(d);}).reduce(function(a, b){return a+b;})))},boosters: [{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.75){return this.n3(d);}else{return this.n4(d);}},n5: function(d){if(d['Sepal.Length']==null){return this.n7(d);}else if(d['Sepal.Length']<5.05){return this.n7(d);}else{return this.n8(d);}},n4: function(d){return -0.176;},n1: function(d){return -0.185185;},n8: function(d){return 0.183333;},n6: function(d){return -0.04;},n7: function(d){return 0.05;}},{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.75){return this.n3(d);}else{return this.n4(d);}},n1: function(d){return -0.169425;},n5: function(d){return 0.162224;},n6: function(d){return -0.0376093;},n4: function(d){return -0.160991;}},{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.75){return this.n3(d);}else{return this.n4(d);}},n1: function(d){return -0.157172;},n5: function(d){return 0.150193;},n6: function(d){return -0.0353777;},n4: function(d){return -0.149109;}},{predict: function(d){return this.n0(d);},n4: function(d){if(d['Petal.Length']==null){return this.n7(d);}else if(d['Petal.Length']<5.05){return this.n7(d);}else{return this.n8(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.65){return this.n3(d);}else{return this.n4(d);}},n5: function(d){return 0.14811;},n1: function(d){return -0.147365;},n7: function(d){return -0.0624099;},n8: function(d){return -0.145287;},n6: function(d){return -0.0605033;}},{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.75){return this.n3(d);}else{return this.n4(d);}},n5: function(d){if(d['Sepal.Length']==null){return this.n7(d);}else if(d['Sepal.Length']<5.15){return this.n7(d);}else{return this.n8(d);}},n4: function(d){return -0.131855;},n1: function(d){return -0.139328;},n8: function(d){return 0.138283;},n6: function(d){return -0.0297317;},n7: function(d){return 0.0411859;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Length']==null){return this.n3(d);}else if(d['Petal.Length']<4.85){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<1.75){return this.n7(d);}else{return this.n8(d);}},n3: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<1.55){return this.n5(d);}else{return this.n6(d);}},n5: function(d){return 0.132516;},n1: function(d){return -0.13261;},n7: function(d){return -0.00233335;},n8: function(d){return -0.132892;},n6: function(d){return 0.00148081;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Length']==null){return this.n3(d);}else if(d['Petal.Length']<4.85){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<1.75){return this.n7(d);}else{return this.n8(d);}},n3: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<1.55){return this.n5(d);}else{return this.n6(d);}},n5: function(d){return 0.126633;},n1: function(d){return -0.126897;},n7: function(d){return -0.00218004;},n8: function(d){return -0.12695;},n6: function(d){return 0.00139591;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Length']==null){return this.n3(d);}else if(d['Petal.Length']<4.85){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<1.75){return this.n7(d);}else{return this.n8(d);}},n3: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<1.55){return this.n5(d);}else{return this.n6(d);}},n5: function(d){return 0.121548;},n1: function(d){return -0.121964;},n7: function(d){return -0.00203681;},n8: function(d){return -0.121821;},n6: function(d){return 0.00131588;}},{predict: function(d){return this.n0(d);},n2: function(d){if(d['Petal.Length']==null){return this.n3(d);}else if(d['Petal.Length']<4.85){return this.n3(d);}else{return this.n4(d);}},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n4: function(d){if(d['Petal.Width']==null){return this.n7(d);}else if(d['Petal.Width']<1.75){return this.n7(d);}else{return this.n8(d);}},n3: function(d){if(d['Petal.Width']==null){return this.n5(d);}else if(d['Petal.Width']<1.55){return this.n5(d);}else{return this.n6(d);}},n5: function(d){return 0.117093;},n1: function(d){return -0.117644;},n7: function(d){return -0.00190298;},n8: function(d){return -0.117331;},n6: function(d){return 0.00124044;}},{predict: function(d){return this.n0(d);},n0: function(d){if(d['Petal.Length']==null){return this.n1(d);}else if(d['Petal.Length']<2.45){return this.n1(d);}else{return this.n2(d);}},n3: function(d){if(d['Petal.Length']==null){return this.n5(d);}else if(d['Petal.Length']<4.95){return this.n5(d);}else{return this.n6(d);}},n2: function(d){if(d['Petal.Width']==null){return this.n3(d);}else if(d['Petal.Width']<1.75){return this.n3(d);}else{return this.n4(d);}},n5: function(d){if(d['Sepal.Length']==null){return this.n9(d);}else if(d['Sepal.Length']<5.3){return this.n9(d);}else{return this.n10(d);}},n4: function(d){if(d['Sepal.Length']==null){return this.n7(d);}else if(d['Sepal.Length']<5.95){return this.n7(d);}else{return this.n8(d);}},n1: function(d){return -0.113813;},n10: function(d){return 0.114327;},n6: function(d){return -0.0275119;},n9: function(d){return 0.0297086;},n8: function(d){return -0.113381;},n7: function(d){return -0.0303868;}}]};