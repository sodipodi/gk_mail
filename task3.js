

                    var t1 = Number(process.argv[2]),
					t2 = Number(process.argv[3]);
					
					
					var sum = t1 + t2;
				    var h = Math.floor(sum / 3600);
				    var m = Math.floor(sum % 3600 / 60);
				    var s = Math.floor(sum % 3600 % 60);
				
				    var hDisplay = h > 0 ? h + ("ч. ") : "";
				    var mDisplay = m > 0 ? m + ("мин. ") : "";
				    var sDisplay = s > 0 ? s + ("сек. ") : "";
				   
					console.log(hDisplay + mDisplay + sDisplay);