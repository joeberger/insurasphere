function initTrustILP_V3(e) {
	var b = "vid_" + e;
	document.write('<div id="' + e + '"><div id="' + b + '"></div></div>');
	var a = (e.substr(0, 7));
	$
			.ajax({
				url : "https://ispeakvideo.com/sandbox/inc/ilp_validation.php",
				data : {
					validate : e
				},
				dataType : "jsonp",
				jsonp : "callback",
				success : function(g, f) {
					if (g.show_errors == "yes" || g.error == "invalid"
							|| g.error == "none" || g.error == "inactive") {
						$("#" + e)
								.append(
										'<div id="show_errors" style="margin-top:20px;"><div>ILP ERROR MONITOR</div><div><div id="msg"></div></div><div id="basic"></div><div id="info"></div><div id="html5"></div><div id="mobile"></div><div id="controls"></div><div id="quirk"></div><div id="server"></div><div id="projectID"></div><div id="swfpath"></div><div id="errorMessage" style="color:red;"></div></div>');
						$("#info").html("Flash Support:: " + g.flash_support);
						$("#mobile").html(
								"Mobile Support:: " + g.mobile_support);
						$("#html5").html("HTML 5 Support:: " + g.html5_support);
						$("#swfpath").html("SWF Path:: " + g.swfPath);
						$("#info3").html("Error Code:: " + g.error);
						$("#info4").html("Query Status:: " + f);
						$("#basic").html("Basic Setting:: " + g.basic);
						$("#controls").html(
								"Custom Controls:: " + g.use_controls);
						$("#quirk").html("Quirk Mode:: " + document.compatMode);
						$("#projectID").html("Project ID:: " + e)
					}
					switch (g.error) {
					case "none":
						$("#msg").append(
								"Error Code:: no matching project found");
						break;
					case "inactive":
						$("#msg").append("Error Code:: this video is inactive");
						d(g.basic);
						break;
					case "active":
						$("#msg").append("Error Code:: this video is active");
						c(g);
						break;
					case "invalid":
						$("#msg").append(
								"Error Code:: invalid request. check ID");
						break
					}
				}
			});
	function c(Q) {
		var n = Q.htmlMobile;
		var r = Q.html_ipad;
		var F = Q.htmlCode;
		var P = Q.swfPath;
		var M = Q.flash_support;
		var L = Q.html5_support;
		var C = Q.mobile_support;
		var i = Q.use_controls;
		var j = Q.basic;
		var D = Q.width;
		var t = Q.height;
		var k = Q.poster;
		var N = Q.ctrlTemp;
		var g = "isp-" + N;
		var I = "isp-sm" + N;
		var q = document.createElement("video");
		var K = swfobject.hasFlashPlayerVersion("9.0.115");
		var s = navigator.userAgent.match(/iPad/i) != null;
		var E = navigator.userAgent.match(/iPhone OS 3/i) != null;
		var B = navigator.userAgent.match(/iPhone OS 4/i) != null;
		var m = navigator.userAgent.match(/AppleTV/i) != null;
		var y = screen.width <= 600;
		var x = '<img src="' + k + '" />';
		var A = '<a href="' + Q.eMp4 + '"><img src="' + k
				+ '" border="0" /></a>';
		if (j == "no") {
			$("head").append(
					'<link rel="stylesheet" href="https://trustilp.com/flive/eComponents/live/'
							+ a + "/css/" + e + '.css" type="text/css" />');
			J();
			var H = "100%";
			var o = "100%"
		} else {
			$("#" + e).css("width", D, "height", t);
			var H = t;
			var o = D
		}
		if (y == true) {
			G()
		}
		if (s == true) {
			O()
		}
		if (m == true) {
			u()
		}
		if ((y == false) && (s == false) && (m == false)) {
			if (M == "yes") {
				if (K == true) {
					l()
				} else {
					z()
				}
			}
			if (M == "no") {
				if (!q.play) {
					$("#" + b).html(x)
				}
				if (q.play) {
					z()
				}
			}
		}
		function G() {
			if (C == "yes") {
				if (B == true) {
					if (M == "yes" && K == true) {
						l()
					} else {
						z()
					}
				}
				if (E == true) {
					if (!q.play) {
						$("#" + b).html(A)
					} else {
						$("#" + b).html(n)
					}
				}
				if (B == false && E == false) {
					if (!q.play) {
						$("#" + b).html(A)
					} else {
						$("#" + b).html(n)
					}
				}
			} else {
				$("#" + b).html(x)
			}
		}
		function O() {
			if (M == "yes" && K == true) {
				l()
			} else {
				if (L == "yes") {
					$("#" + b).html(r);
					if (i == "yes") {
						$("head").append(
								'<link rel="stylesheet" href="https://trustilp.com/flive/eComponents/live/'
										+ a + "/skins/" + e + "_" + N
										+ '.css" type="text/css" />');
						$("#ISP1").ispVideo({
							theme : g
						});
						$("#ISP2").ispVideo({
							theme : g,
							childtheme : I
						})
					}
				} else {
					$("#" + b).html(x)
				}
			}
		}
		function u() {
			if (M == "yes" && K == true) {
				l()
			} else {
				if (L == "yes") {
					$("#" + b).html(r);
					if (i == "yes") {
						$("head").append(
								'<link rel="stylesheet" href="https://trustilp.com/flive/eComponents/live/'
										+ a + "/skins/" + e + "_" + N
										+ '.css" type="text/css" />');
						$("#ISP1").ispVideo({
							theme : g
						});
						$("#ISP2").ispVideo({
							theme : g,
							childtheme : I
						})
					}
				} else {
					$("#" + b).html(x)
				}
			}
		}
		function z() {
			if (L == "yes") {
				$("#" + b).html(F);
				if (i == "yes") {
					$("head").append(
							'<link rel="stylesheet" href="https://trustilp.com/flive/eComponents/live/'
									+ a + "/skins/" + e + "_" + N
									+ '.css" type="text/css" />');
					$("#ISP1").ispVideo({
						theme : g
					});
					$("#ISP2").ispVideo({
						theme : g,
						childtheme : I
					})
				}
			} else {
				$("#" + b).html(x)
			}
		}
		function l() {
			if (M == "yes") {
				var f = "vid_" + e;
				var h = {};
				h.uid = e;
				h.image = k;
				var v = {};
				v.wmode = "transparent";
				v.allowfullscreen = "true";
				v.allowscriptaccess = "always";
				var p = {};
				p.align = "bottom";
				p.name = "ispmovie";
				swfobject.embedSWF("https://trustilp.com/flive/" + P, f, o, H,
						"9.0.0", false, h, v, p)
			} else {
				$("#" + f).html(x)
			}
		}
		function J() {
			var f = navigator.userAgent.toLowerCase();
			$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
			if ($.browser.msie) {
				$("body").addClass("browserIE");
				$("body").addClass(
						"browserIE" + $.browser.version.substring(0, 1))
			}
			if ($.browser.chrome) {
				$("body").addClass("browserChrome");
				f = f.substring(f.indexOf("chrome/") + 7);
				f = f.substring(0, 1);
				$("body").addClass("browserChrome" + f);
				$.browser.safari = false
			}
			if ($.browser.safari) {
				$("body").addClass("browserSafari");
				f = f.substring(f.indexOf("version/") + 8);
				f = f.substring(0, 1);
				$("body").addClass("browserSafari" + f)
			}
			if ($.browser.mozilla) {
				if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
					$("body").addClass("browserFirefox");
					f = f.substring(f.indexOf("firefox/") + 8);
					f = f.substring(0, 1);
					$("body").addClass("browserFirefox" + f)
				} else {
					$("body").addClass("browserMozilla")
				}
			}
			if ($.browser.opera) {
				$("body").addClass("browserOpera")
			}
		}
	}
	function d(f) {
		if (f == "no") {
			$("head").append(
					'<link rel="stylesheet" href="https://trustilp.com/flive/eComponents/live/'
							+ a + "/css/" + e + '.css" type="text/css" />')
		}
		$("#" + e)
				.prepend(
						'<img src="'
								+ pUrl
								+ '" /><br>This video is inactive. A static image has been delivered in place of a video. Please contact provider to activate project.')
	}
	$("head").append(
			'<script type="text/javascript">function closeDiv(){document.getElementById("'
					+ e + '").style.display = "none";document.getElementById("'
					+ b + '").style.display = "none";}<\/script>')
}
(function(a) {
	a.fn.ispVideo = function(b) {
		var c = {
			theme : "",
			childtheme : ""
		};
		var b = a.extend(c, b);
		return this
				.each(function() {
					var f = a(this);
					var j = a("<div></div>").addClass("ispeak-video-player")
							.addClass(b.theme).addClass(b.childtheme);
					var e = a('<div class="ispeak-video-controls"><a class="ispeak-video-play" title="Play/Pause"></a><div class="ispeak-video-seek"></div><div class="ispeak-video-timer">00:00</div><div class="ispeak-volume-box"><div class="ispeak-volume-slider"></div><a class="ispeak-volume-button" title="Mute/Unmute"></a></div></div>');
					f.wrap(j);
					f.after(e);
					var d = f.parent(".ispeak-video-player");
					var e = a(".ispeak-video-controls", d);
					var l = a(".ispeak-video-play", d);
					var p = a(".ispeak-video-seek", d);
					var o = a(".ispeak-video-timer", d);
					var h = a(".ispeak-volume-slider", d);
					var m = a(".ispeak-volume-button", d);
					e.hide();
					var k = function() {
						if (f.attr("paused") == false) {
							f[0].pause()
						} else {
							f[0].play()
						}
					};
					l.click(k);
					f.click(k);
					f.bind("play", function() {
						l.addClass("ispeak-paused-button")
					});
					f.bind("pause", function() {
						l.removeClass("ispeak-paused-button")
					});
					f.bind("ended", function() {
						l.removeClass("ispeak-paused-button")
					});
					var g;
					var q = function() {
						if (f.attr("readyState")) {
							var t = f.attr("duration");
							p.slider({
								value : 0,
								step : 0.01,
								orientation : "horizontal",
								range : "min",
								max : t,
								animate : true,
								slide : function() {
									g = true
								},
								stop : function(v, u) {
									g = false;
									f.attr("currentTime", u.value)
								}
							});
							e.show()
						} else {
							setTimeout(q, 150)
						}
					};
					q();
					var n = function(v) {
						var t = Math.floor(v / 60) < 10 ? "0"
								+ Math.floor(v / 60) : Math.floor(v / 60);
						var u = Math.floor(v - (t * 60)) < 10 ? "0"
								+ Math.floor(v - (t * 60)) : Math.floor(v
								- (t * 60));
						return t + ":" + u
					};
					var i = function() {
						var t = f.attr("currentTime");
						if (!g) {
							p.slider("value", t)
						}
						o.text(n(t))
					};
					f.bind("timeupdate", i);
					var s = 1;
					h.slider({
						value : 1,
						orientation : "vertical",
						range : "min",
						max : 1,
						step : 0.05,
						animate : true,
						slide : function(u, t) {
							f.attr("muted", false);
							s = t.value;
							f.attr("volume", t.value)
						}
					});
					var r = function() {
						if (f.attr("muted") == true) {
							f.attr("muted", false);
							h.slider("value", s);
							m.removeClass("ispeak-volume-mute")
						} else {
							f.attr("muted", true);
							h.slider("value", "0");
							m.addClass("ispeak-volume-mute")
						}
					};
					m.click(r);
					f.removeAttr("controls")
				})
	};
	a.fn.ispVideo.defaults = {}
})(jQuery);