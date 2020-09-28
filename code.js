function BindSearch(b, d, a) {
    secBox = $(b);
    inputBox = secBox.find(d);
    var c = inputBox.attr("placeholder");
    inputBox.focus(function () {
        if ($(this).val() == c) {
            $(this).parents(b).addClass("in");
            $(this).val("")
        }
    }).blur(function () {
        if ($(this).val() == "" || $(this).val() == c) {
            $(this).parents(b).removeClass("in");
            $(this).val(c)
        }
    });
    inputBox.keydown(function (e) {
        var e = arguments[0] || window.event;
        if (e.keyCode == 13) {
            $(this).siblings(a).trigger("click")
        }
    })
}

function _resultPop(c) {
    var a = $.extend({label: 1, text: "sussess", delay: 500}, c);
    $(".result-pop").remove();
    if (a.label) {
        _i = '<i class="icon-success"></i>'
    } else {
        _i = '<i class="icon-fail"></i>'
    }
    pop = $('<div class="result-pop"></div>').html("<p>" + _i + a.text + "</p>");
    $("body").append(pop);
    _Width = parseInt(pop.outerWidth());
    _Height = parseInt(pop.outerHeight());
    pop.show();
    b();

    function b() {
        leftPos = parseInt(($(window).width() / 2) - (_Width / 2));
        topPos = parseInt(($(window).height() / 2) - (_Height / 2));
        if ($(window).width() < _Width) {
            leftPos = 0
        }
        if ($(window).height() < _Height) {
            topPos = 0
        }
        pop.css({left: leftPos + $(window).scrollLeft() + "px", top: topPos + $(window).scrollTop() + "px"})
    }

    setTimeout(function () {
        pop.remove()
    }, a.delay)
}

function moduleTabFunc() {
    $(".module-tab").on("click", "li", function () {
        _id = $(this).attr("data-id");
        if (_id != undefined && _id != "") {
            $(this).parent().find("li").removeClass("cur");
            $("li[data-id=" + _id + "]").addClass("cur")
        }
        _anchor = $(this).attr("data-anchor");
        if (_anchor != undefined && _anchor != "") {
            $(".module-tab").find("li").removeClass("cur");
            $("li[data-anchor=" + _anchor + "]").addClass("cur");
            $("body,html").animate({scrollTop: $("#" + _anchor).offset().top}, 100)
        }
    });
    tabBtn = $(".module-tab").find("li");
    if (tabBtn.attr("data-anchor") != undefined && tabBtn.attr("data-anchor") != "") {
        anchorTag = $(".module-con");
        $(window).on("load scroll resize", function () {
            var c = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            var b = c + $(window).height();
            anchorTag.each(function () {
                _index = anchorTag.index($(this));
                if (c <= $(this).offset().top && b >= $(this).offset().top) {
                    a(_index);
                    return false
                } else {
                    if (_index != 0 && b < $(this).offset().top && c > anchorTag.eq(_index - 1).offset().top) {
                        a(_index - 1);
                        return false
                    } else {
                        if (_index == 0 && b < $(this).offset().top) {
                            a(0);
                            return false
                        }
                    }
                }
            })
        });

        function a(b) {
            tabBtn.removeClass("cur");
            goalAnchor = tabBtn.eq(b).attr("data-anchor");
            $("li[data-anchor=" + goalAnchor + "]").addClass("cur")
        }
    }
}

$(document).ready(function () {
    BindSearch(".search-form", ".search-input", ".searchbtn");
    moduleTabFunc()
});
String.prototype.format = function () {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function (b, c) {
        return a[c]
    })
};
String.prototype.setCharAt = function (b, a) {
    if (b > this.length - 1) {
        return str
    }
    return this.substr(0, b) + a + this.substr(b + 1)
};

function getOuterLink(d, a) {
    var b = "{0}loginid.aspx?uid={1}&p={2}";
    var c = getOuterBaseLink(d) + a;
    window.open(c)
}

function getOuterLinkLogin(c, a, e) {
    var b = "{0}loginid.aspx?uid={1}&p={2}";
    var d = b.format(getOuterBaseLink("NAVI"), encodeURIComponent(e), encodeURIComponent(a));
    window.open(d, "knstarget")
}

function getOuterBaseLink(b) {
    var a = "";
    b = b.toUpperCase();
    switch (b) {
        case"NAVI":
            if (typeof (BaseLink_NAVI) != "undefined") {
                a = BaseLink_NAVI ? BaseLink_NAVI : ""
            }
            break;
        case"COVER":
            if (typeof (BaseLink_COVER) != "undefined") {
                a = BaseLink_COVER ? BaseLink_COVER : ""
            }
            break;
        case"LIB":
            if (typeof (BaseLink_LIB) != "undefined") {
                a = BaseLink_LIB
            }
            break;
        case"AD":
            if (typeof (BaseLink_AD) != "undefined") {
                a = BaseLink_AD ? BaseLink_AD : ""
            }
            break;
        case"TOKNS":
            if (typeof (BaseLink_TOKNS) != "undefined") {
                a = BaseLink_TOKNS ? BaseLink_TOKNS : ""
            }
            break;
        case"REFBOOK":
            if (typeof (BaseLink_REFBOOK) != "undefined") {
                a = BaseLink_REFBOOK ? BaseLink_REFBOOK : ""
            }
            break;
        case"CRRS":
            if (typeof (BaseLink_CRRS) != "undefined") {
                a = BaseLink_CRRS ? BaseLink_CRRS : ""
            }
            break;
        case"TOKMYCNKI":
            if (typeof (BaseLink_TOKMYCNKI) != "undefined") {
                a = BaseLink_TOKMYCNKI ? BaseLink_TOKMYCNKI : ""
            }
            break;
        case"KNSVOTE":
            if (typeof (BaseLink_knsvote) != "undefined") {
                a = BaseLink_knsvote ? BaseLink_knsvote : ""
            }
            break;
        case"KLOGINFOOTER":
            if (typeof (BaseLink_KloginFooter) != "undefined") {
                a = BaseLink_KloginFooter ? BaseLink_KloginFooter : ""
            }
            break;
        case"KLOGIN":
            if (typeof (BaseLink_Klogin) != "undefined") {
                a = BaseLink_Klogin ? BaseLink_Klogin : ""
            }
            break;
        case"KREDIS":
            if (typeof (BaseLink_Kredis) != "undefined") {
                a = BaseLink_Kredis ? BaseLink_Kredis : ""
            }
            break;
        case"CRLDENG":
            if (typeof (BaseLink_CRLDENG) != "undefined") {
                a = BaseLink_CRLDENG ? BaseLink_CRLDENG : ""
            }
            break;
        case"LIBINFO":
            if (typeof (BaseLink_LibInfo) != "undefined") {
                a = BaseLink_LibInfo ? BaseLink_LibInfo : ""
            }
            break;
        case"RECOMMEND":
            if (typeof (BaseLink_Recommend) != "undefined") {
                a = BaseLink_Recommend ? BaseLink_Recommend : ""
            }
            break;
        case"TOKNET":
            if (typeof (BaseLink_TOKNET) != "undefined") {
                a = BaseLink_TOKNET ? BaseLink_TOKNET : ""
            }
            break;
        case"TOKREADER":
            if (typeof (BaseLink_TOKREADER) != "undefined") {
                a = BaseLink_TOKREADER ? BaseLink_TOKREADER : ""
            }
            break;
        case"BQSM":
            if (typeof (BaseLink_BQSM) != "undefined") {
                a = BaseLink_BQSM ? BaseLink_BQSM : ""
            }
            break;
        case"SUBTURNURL":
            if (typeof (BaseLink_SubTurnURL) != "undefined") {
                a = BaseLink_SubTurnURL ? BaseLink_SubTurnURL : ""
            }
            break;
        case"EXPORTKCMSURL":
            if (typeof (BaseLink_ExportKcmsURL) != "undefined") {
                a = BaseLink_ExportKcmsURL ? BaseLink_ExportKcmsURL : ""
            }
            break
    }
    return a
}

function getKns55NaviLink(g, e, a, c) {
    var h = "{0}loginid.aspx?uid={1}&p={2}";
    var f = "navi/Bridge.aspx?LinkType=BaseLink&DBCode={0}&TableName={1}&Field=BaseID&Value={2}";
    e = e.toLowerCase();
    if (e == "cjsf") {
        a = "cjfdbaseinfo"
    }
    var b = f.format(e, a, c);
    var d = h.format(getOuterBaseLink("NAVI"), encodeURIComponent(g), encodeURIComponent(b));
    window.open(d, "knstarget")
}

function getKns55NaviLinkIssue(j, f, a, c, k, l) {
    var h = "{0}loginid.aspx?uid={1}&p={2}";
    var g = "navi/Bridge.aspx?LinkType=IssueLink&DBCode={0}&TableName={1}&ShowField=cname&Field=BaseID*year*issue&Value={2}*{3}*{4}";
    var e = "Navi/Bridge.aspx?LinkType=IssueLink&DBCode={0}&TableName={1}&ShowField=cname&Field=thname&Value={2}{3}{4}";
    f = f.toLowerCase();
    if (f == "cjsf") {
        a = "cjfdyearinfo"
    }
    if (f == "cfjd" || f == "cfjw" || f == "cfjg" || f == "cfjc" || f == "cfjx") {
        a = "cfedyearinfo"
    }
    if (f == "ccjd" || f == "cjfv" || f == "cjfu" || f == "cjfz" || f == "cjfy" || f == "cjfx" || f == "cjft" || f == "cjfr") {
        a = "";
        g = e
    }
    var b = g.format(f, a, c, k, l);
    var d = h.format(getOuterBaseLink("NAVI"), encodeURIComponent(j), encodeURIComponent(b));
    window.open(d, "knstarget")
}

function getKns8NaviLink(a, c) {
    var d = "https://kns.cnki.net/kns8";
    var b = d + "/Navi?DBCode={0}&BaseID={1}";
    b = b.format(a, c);
    window.open(b, "knstarget")
}

function getKns8YearNaviLink(b, e, c, a) {
    var f = "https://kns.cnki.net/kns8";
    var d = f + "/Navi?DBCode={0}&BaseID={1}&year={2}&issue={3}";
    if (b.toLowerCase() == "cyfd") {
        d = f + "/Navi?DBCode={0}&BaseID={1}&Extracode={2}"
    }
    d = d.format(b, e, c, a);
    window.open(d, "knstarget")
}

function getKns55UnitNaviLink(g, d, e) {
    var c = "{0}loginid.aspx?uid={1}&p={2}";
    var b = "navi/Bridge.aspx?DBCode={0}&UnitCode={1}";
    d = d.toLowerCase();
    if (d == "cmbf" || d == "cmbf2011" || d == "cmsf" || d == "cmzd" || d == "cfmd") {
        d = "cmfd"
    } else {
        if (d == "cdbf" || d == "cdbf2011" || d == "cdsf" || d == "cdmd") {
            d = "cdfd"
        }
    }
    var a = b.format(d, e);
    var f = c.format(getOuterBaseLink("NAVI"), encodeURIComponent(g), encodeURIComponent(a));
    window.open(f, "knstarget")
}

function getKns55YearNaviLink(g, e, a, c, h) {
    var j = "{0}loginid.aspx?uid={1}&p={2}";
    var f = "navi/Bridge.aspx?LinkType=YearLink&DBCode={0}&TableName={1}&ShowField={4}&Field={5}*year&Value={2}*{3}";
    var b = f.format(e, a, c, h, encodeURIComponent("年鉴中文名"), "BaseID");
    var d = j.format(getOuterBaseLink("NAVI"), encodeURIComponent(g), encodeURIComponent(b));
    window.open(d, "knstarget")
}

function getKns55CYFDNaviLink(g, e, a, c) {
    var h = "{0}loginid.aspx?uid={1}&p={2}";
    var f = "navi/Bridge.aspx?LinkType=BaseLink&DBCode={0}&TableName={1}&Field={3}&Value={2}";
    e = e.toLowerCase();
    var b = f.format(e, a, c, encodeURIComponent("种编码"));
    var d = h.format(getOuterBaseLink("NAVI"), encodeURIComponent(g), encodeURIComponent(b));
    window.open(d, "knstarget")
}

function OpenCRLDENG(a) {
    if (typeof (BaseLink_CRLDENG) == "undefined" || BaseLink_CRLDENG == null || BaseLink_CRLDENG == "") {
        return ""
    }
    window.open(BaseLink_CRLDENG + encodeURIComponent(a), "kcmsnavitarget")
}

function GetRefBookLink(a) {
    if (typeof (BaseLink_REFBOOK) == "undefined" || BaseLink_REFBOOK == null || BaseLink_REFBOOK == "") {
        return ""
    }
    var b = "{0}BasicSearch.aspx?kw={1}";
    return b.format(BaseLink_REFBOOK, a)
}

function login() {
    var a = window.location.href;
    var b = "../login.aspx?url=" + encodeURIComponent(a);
    window.location = b
}

function logout() {
    var a = window.location.href;
    var b = "../logout.aspx?url=" + encodeURIComponent(a);
    window.location = b
}

function MM_swapImage(b, a) {
    b.src = a
}

function OnDownloadMore(c, b, f, d, e) {
    var a = c + "?ti=" + encodeURIComponent(b) + "&tb=" + f + "&fn=" + d + "&code=" + e;
    window.open(a, "download", "height=200, width=400, top=100,left=300, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no")
}

function OpenDLMore(d, b, c) {
    var a = "../../download.aspx?filename=" + d + "&tablename=" + b + "&pubstr=" + c;
    window.open(a, "_blank")
}

function ChangeReferType(a) {
    var b = document.getElementById("rl" + a);
    var c = document.getElementsByName(b.name);
    for (var d = 0; d < c.length; d++) {
        c[d].className = ""
    }
    b.className = "ReferLinkOn"
}

function ShowChar(f) {
    var a = document.getElementById(f).innerHTML;
    var b = "";
    for (var e = 0; e < a.length; e++) {
        var d = a.charCodeAt(e);
        b += d + ":" + a[e] + ";"
    }
    alert(b)
}

function RemoveUnknownChar(a) {
    if (!a) {
        return ""
    }
    for (var d = 0; d < a.length; d++) {
        var b = a.charCodeAt(d);
        if (b == 57361 || b == 57355 || b == 57347 || b == 57348) {
            a = a.setCharAt(d, " ")
        }
        if (b == 58426) {
            a = a.setCharAt(d, "ö")
        }
    }
    return a
}

function KeywordFilter(a) {
    a = a.replace(/:[\d]+/g, "");
    return a
}

var g_Summary = new Object();
var g_SummaryLength = 500;

function AbstractFilter(d, a, e) {
    var c = document.getElementById(d);
    var b = c.innerHTML;
    g_Summary[d] = b;
    ResetSummary(d, a, e)
}

function MoerSummary(d, a, e) {
    var c = document.getElementById(d);
    var b = g_Summary[d];
    if (!b) {
        return
    }
    b = RemoveUnknownChar(b);
    c.innerHTML = b + "&nbsp;";
    document.getElementById(a).style.display = "none";
    document.getElementById(e).style.display = ""
}

function ResetSummary(d, a, e) {
    var c = document.getElementById(d);
    var b = g_Summary[d];
    if (!!b && b.length > g_SummaryLength) {
        b = b.substring(0, g_SummaryLength) + "...";
        document.getElementById(a).style.display = "";
        document.getElementById(e).style.display = "none"
    }
    b = RemoveUnknownChar(b);
    c.innerHTML = b + "&nbsp;"
}

function GetCookie(a) {
    var b = "[;]*[s]*" + a + "=([^;]*)";
    var c = new RegExp(b);
    if (c.test(document.cookie)) {
        return RegExp["$1"]
    } else {
        return ""
    }
}

function GetLib(d) {
    link = getOuterBaseLink("LIB");
    var c = document.getElementById("lib");
    if (link != "" && c) {
        var b = "<a target='_blank' href='{0}' >{1}</a> | ";
        var a = GetCookie("LID");
        if (a) {
            link = link + "&uid=" + a
        }
        b = b.format(encodeURI(link), d);
        c.innerHTML = b
    }
}

function MetaFilter(f, c) {
    var b = /\[A\]([^\[]+)\[\/A]/ig;
    var d = /\[BR\]/ig;
    var e = '<a href="meta.aspx?key={0}&dbcode={2}" >{1}</a>';

    function a(g, h) {
        return e.format(encodeURIComponent(h), h, c)
    }

    f = f.replace(b, a);
    f = f.replace(d, "</p><p>");
    document.write(f)
}

function OpenMeta(a, b) {
    url = "meta.aspx?key={0}&dbcode={1}";
    window.open(url.format(encodeURIComponent(a), b))
}

function Translate(a, b, c) {
    google.language.translate(a, "zh-CN", b, function (d) {
        if (d.translation) {
            document.getElementById(c).innerHTML = d.translation
        }
    })
}

function getQueryString(b) {
    var c = new RegExp("(^|&)" + b + "=([^&]*)(&|$)", "i");
    var a = window.location.search.substr(1).match(c);
    if (a != null) {
        return unescape(a[2])
    }
    return null
}

function SubScriptionForD() {
    var d = $("#deliveryType").val();
    var c = $("#deliveryUid").val();
    var a = $("#deliveryCoutent").val();
    if (a.indexOf("#") > -1) {
        var b = a.split("#");
        if (b[0] != "" && b[0].toLocaleLowerCase() != "f0") {
            a = b[0]
        } else {
            a = b[1]
        }
    }
    content = encodeURIComponent(a);
    SubTurn(d, c, content, "")
}

function SubScription(e, c, b, a) {
    if (e == "") {
        e = $("#deliveryType").val()
    }
    var d = getQueryString("filename") + ";";
    if (a) {
        d = a + ";"
    }
    SubTurn(e, c, b, d)
}

function SubTurn(k, c, b, f) {
    var a = "../detail/frame/SubTurnPage.aspx";
    var j = document.createElement("form");
    j.method = "post";
    j.setAttribute("target", "_blank");
    j.action = a;
    var g = document.createElement("input");
    g.setAttribute("name", "SubT");
    g.setAttribute("value", k);
    j.appendChild(g);
    var h = document.createElement("input");
    h.setAttribute("name", "SubC");
    h.setAttribute("value", b + f);
    j.appendChild(h);
    var d = document.createElement("input");
    d.setAttribute("name", "SubU");
    d.setAttribute("value", c);
    j.appendChild(d);
    var e = document.createElement("input");
    e.setAttribute("name", "cnkiUserKey");
    e.setAttribute("value", GetCookie("cnkiUserKey"));
    j.appendChild(e);
    document.body.appendChild(j);
    j.submit();
    document.body.removeChild(j)
}

function SubTurnExport(d, c) {
    var a = document.createElement("form");
    a.method = "post";
    a.setAttribute("target", "_blank");
    a.action = d;
    var b = document.createElement("input");
    b.setAttribute("name", "formfilenames");
    b.setAttribute("value", c);
    a.appendChild(b);
    document.body.appendChild(a);
    a.submit();
    document.body.removeChild(a)
}

function AttentionService(b) {
    var d = $("#deliveryType").val();
    var a = $("#deliveryUid").val();
    var e = $("#deliveryTable").val();
    var c = $("#deliveryCoutent").val();
    c = encodeURIComponent(c);
    AttentionServiceParam(d, a, e, c, b)
}

function SetNewGuid() {
    var b = "";
    for (var c = 1; c <= 32; c++) {
        var a = Math.floor(Math.random() * 16).toString(16);
        b += a;
        if ((c == 8) || (c == 12) || (c == 16) || (c == 20)) {
            b += "-"
        }
    }
    return b
}

function SetCookie(a, d, b) {
    if (GetCookie(a) == "" || GetCookie(a) == null) {
        var c = new Date();
        c.setDate(c.getDate() + b);
        document.cookie = a + "=" + escape(d) + ((b == null) ? "" : ";expires=" + c.toGMTString()) + "; path=/;domain=cnki.net"
    }
}

function AttentionServiceParam(d, a, f, c, b) {
    if (!a || a == "undefined") {
        return
    }
    var e = GetCookie("cnkiUserKey");
    if (!e) {
        e = SetNewGuid();
        SetCookie("cnkiUserKey", SetNewGuid(), 3650)
    }
    $(document).ready(function () {
        var h = getOuterBaseLink("SUBTURNURL") + "/KnsDelivery/ExtendDB/addattention.ashx?un=" + a + "&skey=" + e + "&type=" + d + "&dbName=" + f + "&content=" + c;
        if (b == "1") {
            h = h + "&p=1"
        }
        try {
            RequestJsonObject(h, function () {
                if (typeof result != "undefined") {
                    var j = result.data[0].msg;
                    var k = result.data[0].code;
                    if (b == "1") {
                        if (k == "2") {
                            $("#AttentionYes").show();
                            $("#AttentionNo").hide()
                        }
                    } else {
                        $("#popupmsg").html(j + "!");
                        $("#popupTips").show();
                        setTimeout(function () {
                            $("#popupTips").fadeOut();
                            $("#popupmsg").html("");
                            $("#AttentionYes").show();
                            $("#AttentionNo").hide()
                        }, 10000)
                    }
                }
            })
        } catch (g) {
        }
        $("#coreContent").hide()
    })
}

function Attention() {
    if ($("#coreContent").css("display") == "none") {
        $(".attention div input[type=checkBox]").each(function () {
            $(this).removeAttr("checked")
        });
        $("#coreContent").css({top: $("#attAuthor").position().top + 19});
        $("#coreContent").show();
        $("#coreContent").unbind("mouseleave").bind("mouseleave", function () {
            $(".attention div input[type=checkBox]").each(function () {
                $(this).removeAttr("checked")
            });
            $(this).hide()
        })
    } else {
        $("#coreContent").hide()
    }
}

function showNewAu(b, a) {
    url = "knetsearch.aspx?sfield=au&skey={0}&code={1}";
    window.open(url.format(encodeURIComponent(b), a), "_self")
}

function showFileAddInfo(a, h, g, j, b) {
    closePopMore(1);
    $(".active").attr("class", "");
    if (b) {
        if ($("#showmoreid").val() == g) {
            $(".popMore").remove();
            return
        } else {
            $(".popMore").remove()
        }
    } else {
        if (parent.$("#showmoreid").val() == g) {
            parent.$(".popMore").remove();
            return
        } else {
            parent.$(".popMore").remove()
        }
    }
    var e = parent.$("#deliveryUid").val();
    j = encodeURIComponent(j);
    var d = "/KCMS/detail/detail.aspx?dbcode={0}&dbname={1}&filename={2}";
    d = d.format(a, h, g);
    var c = "<div class='popMore'><input id='showmoreid' type='hidden' value='" + g + "'/><div class='pmShare'>分享到" + ShareAstrList(a, h, g, "sharebd") + "</div></div>";
    var f = a + g;
    if (f.indexOf(".") > 0) {
        f = f.substring(0, f.indexOf("."))
    }
    $("a[id^='" + f + "']").parent().attr("class", "active");
    if (b) {
        $("#func603").append(c);
        $(".popMore").css("left", $("a[id^='" + f + "']").offset().left - 196);
        $(".popMore").css("top", $("a[id^='" + f + "']").offset().top - 175)
    } else {
        if (window.parent.getIframeByElement(document.body) && window.parent.getIframeByElement(document.body).id) {
            $(parent.document.body).append(c);
            parent.$(".popMore").css("left", parent.$("#" + window.parent.getIframeByElement(document.body).id).offset().left + $("a[id^='" + f + "']").offset().left - 84);
            parent.$(".popMore").css("top", parent.$("#" + window.parent.getIframeByElement(document.body).id).offset().top + $("a[id^='" + f + "']").offset().top - 66)
        }
    }
}

function closePopMore(a) {
    $(".popMore").remove();
    $("li").each(function () {
        $(this).removeClass("active")
    });
    $("iframe").each(function () {
        $(this).contents().find("li").each(function () {
            $(this).removeClass("active")
        });
        $(this).removeClass("active")
    });
    parent.$("iframe").each(function () {
        $(this).contents().find("li").each(function () {
            $(this).removeClass("active")
        });
        $(this).removeClass("active")
    })
}

function AddFav(f, a, c, b, e) {
    var d = "/KCMS/detail/detail.aspx?dbcode={0}&dbname={1}&filename={2}&v={3}";
    d = d.format(f, a, c, b);
    AddFavorite(d, e)
}

function AddFavTitle(b) {
    var a = document.URL;
    b = (b == "" ? document.title : b);
    AddFavorite(a, b)
}

function AddFavorite(c, a) {
    try {
        window.external.addFavorite(c, decodeURIComponent(a))
    } catch (b) {
        try {
            window.sidebar.addPanel(decodeURIComponent(a), c, "")
        } catch (b) {
            alert("由于您的浏览器不支持，请使用Ctrl+D进行添加到收藏。")
        }
    }
}

function ShareAstr(b) {
    var a = location.href;
    a = delParam("uid");
    a = delParam("v");
    var d = "//app.cnki.net/Parts/QRCode/Get?source=KCMS&amp;text=" + encodeURIComponent(a);
    var c = "<ul class='" + b + "' id='sharedet'><li><a href='javascript:void(0);' onclick=CopyToClipboard() class='copy' title='" + message.copylink + "'><i></i>" + message.copylink + "</a></li><li><a href='javascript:void(0);'  onclick=ShareToSinaWb() class='xl' title='" + message.tosina + "'><i></i>" + message.tosina + "</a></li><li><a href='javascript:void(0);' class='wx' title='" + message.toweixin + "'><i></i>" + message.toweixin + "</a> <div class='qrcode'><a href='" + d + "' target='_blank'><img src='" + d + "' alt='' /></a></div></li></ul>";
    return c
}

function delParam(g) {
    var e = window.location.href;
    var h = window.location.search.substr(1);
    var j = e.substr(0, e.indexOf("?"));
    if (!h || !j) {
        return e
    }
    var c = "";
    var f = new Array();
    if (h != "") {
        var b = h.split("&");
        for (var a = 0; a < b.length; a++) {
            var d = b[a].split("=");
            if (d[0] != g) {
                f.push(b[a])
            }
        }
    }
    if (f.length > 0) {
        c = "?" + f.join("&")
    }
    e = j + c;
    return e
}

function CopyToClipboard() {
    var d = delParam("uid");
    var c = d;
    var a = true;
    if (window.clipboardData) {
        window.clipboardData.setData("Text", c)
    } else {
        var b = CreateElementForExecCommand(c);
        SelectContent(b);
        var g = true;
        try {
            if (window.netscape && netscape.security) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
            }
            a = document.execCommand("copy", false, null)
        } catch (f) {
            a = false
        }
        document.body.removeChild(b)
    }
    if (a) {
        alert(message.copyalert)
    } else {
        alert("您的浏览器不支持，请手动复制本文链接。")
    }
}

function CreateElementForExecCommand(b) {
    var a = document.createElement("div");
    a.style.position = "absolute";
    a.style.left = "-10000px";
    a.style.top = "-10000px";
    a.textContent = b;
    document.body.appendChild(a);
    a.contentEditable = true;
    return a
}

function SelectContent(c) {
    var a = document.createRange();
    a.selectNodeContents(c);
    var b = window.getSelection();
    b.removeAllRanges();
    b.addRange(a)
}

function ShareAU(b, a) {
    var d = location.href;
    d = delParam("uid");
    d = delParam("v");
    var c = "<ul class='" + b + "' id='sharedet'><li><a href='javascript:void(0);' onclick=CopyToClipboard() class='copy' title='复制链接'><i></i>复制链接</a></li><li><a href='javascript:void(0);'  onclick=ShareActionAU('" + a + "','xl')  class='xl' title='分享到新浪微博'><i></i>新浪微博</a></li><li><a href='javascript:void(0);' class='wx' title='微信扫一扫'><i></i>微信扫一扫</a> <div class='qrcode'><img src='//app.cnki.net/Parts/QRCode/Get?source=KCMS&amp;text=" + encodeURIComponent(d) + "' alt='' /></div></li></ul>";
    document.write(c)
}

function ShareToSinaWb() {
    var a = "http://v.t.sina.com.cn/share/share.php?&appkey=895033136";
    a += "&url=" + encodeURIComponent(encodeURIComponent(document.location));
    a += "&title=" + encodeURIComponent(document.title);
    window.open(a, "_blank", "toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0,width=600,height=400,top=" + (screen.height - 400) / 2 + ",left=" + (screen.width - 600) / 2)
}

function ShareAstrList(e, d, b, a) {
    var c = "<span class='" + a + "' id='sharedet'><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','xl')     class='xl' title='分享到新浪微博'><i></i>新浪微博</a><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','tx')     class='tx' title='分享到腾讯微博'><i></i>腾讯微博</a><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','rr')     class='rr' title='分享到人人网'><i></i>人人网</a><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','kx')     class='kx' title='分享到开心网'><i></i>开心网</a><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','db')     class='db' title='分享到豆瓣网'><i></i>豆瓣网</a><a href='javascript:void(0);'  onclick=ShareActionList('" + e + "','" + d + "','" + b + "','wy')     class='wy' title='分享到网易微博'><i></i>网易微博</a></span>";
    return c
}

function ShareAction(t) {
    var knshost = getOuterBaseLink("CRRS");
    var dbcode = getQueryString("dbcode");
    var dbname = getQueryString("dbname");
    var filename = getQueryString("filename");
    var sendurlDetail = knshost + "/CRRS/Services/Share.ashx?dbcode=" + dbcode + "&dbname=" + dbname + "&filename=" + filename + "&target=kns&type=" + t + "&cnkiUserKey=" + GetCookie("cnkiUserKey");
    var sendurlDoi = knshost + "/CRRS/Services/Share.ashx?urlInfo=" + encodeURIComponent(document.URL) + "&content=" + encodeURIComponent(document.title) + "&type=" + t + "&target=custom&cnkiUserKey=" + GetCookie("cnkiUserKey");
    var sendurl = sendurlDetail;
    if (filename == "") {
        sendurl = sendurlDoi
    }
    var curUrl = "share.ashx?dbCode=" + dbcode + "&filename=" + filename;
    var referUrl = document.referrer;
    try {
        var userName = "";
        if (window.parent.$("#klogin_isPersonal").val() == "1") {
            userName = window.parent.$("#klogin_userName").val()
        } else {
            if ($("#klogin_isPersonal").val() == "1") {
                userName = $("#klogin_userName").val()
            }
        }
        if (typeof (eval(WriteActionLog)) == "function") {
            WriteActionLog(userName, GetCookie("cnkiUserKey"), curUrl, referUrl)
        }
    } catch (e) {
    }
    window.open(sendurl, "kcmstarget", "width=480,height=430, menubar=no, scrollbars=no,resizable=yes,location=no, status=no")
}

function ShareActionList(f, e, b, d) {
    var c = getOuterBaseLink("CRRS");
    var a = c + "/CRRS/Services/Share.ashx?dbcode=" + f + "&dbname=" + e + "&filename=" + b + "&target=kns&type=" + d + "&cnkiUserKey=" + GetCookie("cnkiUserKey");
    window.open(a, "kcmstarget", "width=480,height=430, menubar=no, scrollbars=no,resizable=yes,location=no, status=no")
}

function ShareActionAU(d, c) {
    var b = getOuterBaseLink("CRRS");
    var a = b + "/CRRS/Services/Share.ashx?urlInfo=" + encodeURIComponent(document.URL) + "&content=" + encodeURIComponent(d) + "&type=" + c + "&target=custom&cnkiUserKey=" + GetCookie("cnkiUserKey");
    window.open(a, "kcmstarget", "width=480,height=430, menubar=no, scrollbars=no,resizable=yes,location=no, status=no")
}

function getIframeByElement(b) {
    var a;
    $("iframe").each(function () {
        if (b.ownerDocument === this.contentWindow.document) {
            a = this
        }
        return !a
    });
    return a
}

function TurnPageToKnet(d, a, c) {
    if (d == null || d == "") {
        d = "kw"
    }
    a = decodeURIComponent(a);
    a = a.replace(/<sub>/g, "_(");
    a = a.replace(/<\/sub>/g, ")");
    a = a.replace(/<sup>/g, "~(");
    a = a.replace(/<\/sup>/g, ")");
    a = encodeURIComponent(a);
    var b = "/kcms/detail/knetsearch.aspx?sfield={0}&skey={1}&code={2}";
    b = b.format(d, a, c);
    window.open(b, "kcmstarget" + d)
}

function TurnPageToKnetV(e, b, d, a) {
    if (e == null || e == "") {
        e = "kw"
    }
    b = decodeURIComponent(b);
    b = b.replace(/<sub>/g, "_(");
    b = b.replace(/<\/sub>/g, ")");
    b = b.replace(/<sup>/g, "~(");
    b = b.replace(/<\/sup>/g, ")");
    b = encodeURIComponent(b);
    var c = "/kcms/detail/knetsearch.aspx?sfield={0}&skey={1}&code={2}&v={3}";
    c = c.format(e, b, d, a);
    window.open(c, "kcmstarget" + e)
}

function TurnPageToKns(e, a, c) {
    var d = getOuterBaseLink("TOKNS");
    var b = "";
    if (a == "") {
        a = parent.$("#showname").html()
    }
    a = encodeURIComponent(a);
    if (e == 0) {
        b = d + "/kns/RedirectPage.aspx?action=indexpage&code={1}&kw={0}";
        if (c.toLowerCase() != "crpd") {
            b += "&korder=1"
        }
    } else {
        if (e == 1) {
            b = d + "/kns/RedirectPage.aspx?action=navipage&code={1}&kw={0}";
            if (c.toLowerCase() == "ccnd") {
                b += "&korder=2"
            } else {
                b += "&korder=1"
            }
        }
    }
    b = b.format(a, c);
    window.open(b, "knstarget")
}

function TurnPageToKnsApp(b) {
    if (!b) {
        b = "cidx"
    }
    var c = message.cidxhost + "/kns/RedirectPage.aspx?action=indexpage&code={1}&kw={0}&korder=1";
    var a = GetQueryStringByName(location.href, "skey");
    if (!a) {
        a = parent.$("#showname").html()
    }
    c = c.format(a, b);
    window.open(c, "knstarget")
}

function TurnPageToKnsNavi(c, j, f) {
    var b = "";
    var e = getOuterBaseLink("TOKNS");
    var d = "/kns/Navi/Bridge.aspx?NaviID=100&BaseID={0}&NaviLink={1}";
    var h = "/kns/Navi/Bridge.aspx?NaviID=1004&CatalogName=cpfdnavi2&Field=navi178&Value={0}&HYJiDaiMa={0}&MeetingName={1}";
    var a = "/kns/Navi/Bridge.aspx?NaviID=34&DBCode=cmfd&UnitCode={0}";
    var g = "/kns/Navi/Bridge.aspx?NaviID=25&BaseID={0}&BaseName={1}&NaviLink={1}";
    c = c.toLowerCase();
    if (c.indexOf("cjfd") > -1) {
        b = d.format(j, f)
    } else {
        if (c.indexOf("cmfd") > -1) {
            b = a.format(j)
        } else {
            if (c.indexOf("cpfd") > -1) {
                b = h.format(j, f)
            } else {
                if (c.indexOf("ccnd") > -1) {
                    b = g.format(j, f)
                }
            }
        }
    }
    window.open(e + b, "knstarget")
}

function TurnPageToNavi() {
    var a = message.navihost + "/KNavi/All.html";
    window.open(a, "knstarget")
}

function SetWaitHide() {
    setTimeout(function () {
        $("#waitDiv").attr("style", "visibility:hidden");
        $("#loadingDot").hide()
    }, 5000)
}

function toTop() {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 360) {
                $("#backtop").removeClass("hiddenV")
            } else {
                $("#backtop").addClass("hiddenV")
            }
            if ($(window).scrollTop() >= 190) {
                $("#CatalogSide").addClass("KnetSideFix");
                SetCatalogFloatBottom()
            } else {
                $("#CatalogSide").removeClass("KnetSideFix")
            }
            if ($(window).scrollTop() >= 350) {
                $("#kcmscatalog").addClass("KnetSideFix");
                SetCatalogFloatBottom()
            } else {
                $("#kcmscatalog").removeClass("KnetSideFix")
            }
        })
    })
}

function SetCatalogFloatBottom() {
    var d = $("#kcmscatalog");
    if ($("#kcmscatalog").length > 0) {
        d = $("#kcmscatalog")
    } else {
        d = $("#CatalogSide")
    }
    if (d.length < 1) {
        return
    }
    var a = $("#footerBox").offset().top;
    var e = $(document).height();
    var f = $(window).height();
    var c = d.height();
    var b = $(window).scrollTop() - (a - 10 - c);
    if (c + 10 >= f) {
        d.removeClass("KnetSideFix")
    } else {
        if (b > 0) {
            d.attr("style", "top:-" + b + "px;transition:top 1s;-moz-transition: top 1s;-webkit-transition: top 1s;")
        } else {
            d.attr("style", "top:10px;transition:top 1s;-moz-transition: top 1s;-webkit-transition: top 1s;")
        }
    }
}

function InsertCatalog() {
    $("#sideCatalogCont").html($(".wxnav").html());
    $("#nulldata").height($("#sideCatalogCont").height() + 82)
}

function setCatalog() {
    if ($("#sideCatalogCont").html() == "") {
        return
    }
    if ($("#sideCatalogCont").hasClass("hiddenV")) {
        $("#sideCatalogCont").removeClass("hiddenV");
        $("#nulldata").show()
    } else {
        $("#sideCatalogCont").addClass("hiddenV");
        $("#nulldata").hide()
    }
}

function SetCatalogNoData(a) {
    parent.$("#" + a).addClass("fsI");
    parent.$("#waitDiv").attr("style", "visibility:hidden");
    TurnToTitle(a);
    parent.$(".loadingDot").remove()
}

function SetParentCatalog() {
    setTempFrameTitle();
    $(".title1").each(function () {
        if ($(this).attr("id") != "") {
            var a = "l" + $(this).attr("id");
            showCatalogId(a)
        }
    });
    $(".title2").each(function () {
        if ($(this).attr("id") != "") {
            var a = "l" + $(this).attr("id");
            showCatalogId(a)
        }
    });
    $(".title3").each(function () {
        if ($(this).attr("id") != "") {
            var a = "l" + $(this).attr("id");
            showCatalogId(a)
        }
    });
    parent.$(".popMore").remove();
    parent.$("#waitDiv").attr("style", "visibility:hidden")
}

function setTempFrameTitle() {
    var a = getQueryString("reftype");
    if (!!a) {
        if (a == "803" || a == "804") {
            $(".essayBox .title2").hide()
        }
    }
}

function showCatalogId(a) {
    if (parent.$("#" + a).length > 0) {
        parent.$("#" + a).show();
        parent.$("#kcmscatalog").show();
        parent.$(".loadingDot").remove()
    }
}

function setCurClass(a) {
    $("dt[id^='lcatalog']").each(function () {
        $(this).removeClass("cur")
    });
    $("dd[id^='lcatalog']").each(function () {
        $(this).removeClass("cur")
    });
    $("#l" + a).addClass("cur");
    a = a.replace("frame", "");
    $("#l" + a).addClass("cur");
    $("#lcatalog_" + a).addClass("cur")
}

var isScrollByTurnToTitle = false;

function TurnToTitle(a) {
    if (a == "") {
        return
    }
    setCurClass(a);
    if ($("#" + a).length > 0) {
        $("html,body").animate({scrollTop: $("#" + a).offset().top}, 500)
    } else {
        $("iframe").each(function () {
            try {
                if (this.contentWindow.document.getElementById(a)) {
                    $("html,body").animate({scrollTop: $(this).offset().top + this.contentWindow.GetElementOffset(a)}, 500)
                }
            } catch (b) {
                if ($("#" + a).length > 1) {
                    $("html,body").animate({scrollTop: $(this).offset().top + $("#" + a).offset()}, 500)
                }
            }
        })
    }
    isScrollByTurnToTitle = true
}

function GetElementOffset(a) {
    return $("#" + a).offset().top
}

function GetUserCenter(a) {
    var b = unescape(getOuterBaseLink("KLOGIN") + a);
    var c = $(".mycnki");
    if (c.length == 1 && b.trim() != "") {
        c.find(".mycnkipop").remove();
        c.unbind();
        $.getJSON(b, {url: "/kcms/login.aspx?url=" + encodeURIComponent(window.location.href)}, function (d) {
            c.append(unescape(d.html))
        })
    }
}

function GetQueryStringByName(c, a) {
    if ("[object String]" == Object.prototype.toString.call(c) && "[object String]" == Object.prototype.toString.call(a)) {
        var b = c.match(new RegExp("[?&]" + a + "=([^&]+)", "i"));
        if (b == null || b.length < 1) {
            return ""
        }
        return b[1]
    }
    return ""
}

function SetQueryStringByName(e, a, b) {
    if ("[object String]" == Object.prototype.toString.call(e)) {
        var c = e.match(new RegExp("([?&]+)" + a + "=[^&]*", "i"));
        var d = e;
        if (c != null) {
            d = e.replace(c[0], c[1] + a + "=" + encodeURI(b))
        } else {
            if (e.indexOf("?") < 0) {
                d = e + "?" + a + "=" + b
            } else {
                d = e + "&" + a + "=" + b
            }
        }
        return d
    }
    return ""
}

(function (a) {
    var b = function () {
    };
    b.getHeader = function (f) {
        var c = getOuterBaseLink("KLOGIN");
        var e = unescape(c);
        var d = "1";
        var k = ",CJFT,CJFU,CJFV,CJFX,CJFY";
        var l = GetQueryStringByName(location.href, "dbcode");
        var h = GetQueryStringByName(location.href, "sfield");
        if (k.indexOf(l) > 0 && (h == null || h == "")) {
            d = "3"
        }
        var j = e + "&uid=" + f + "&flag=" + d;
        var m = "";
        var g = a("#headerBox");
        if (g.length == 1 && a.trim(e) != "") {
            a.getJSON(j, {url: m}, function (n) {
                g.html(unescape(n.html))
            })
        }
    };
    b.getFooter = function () {
        var c = getOuterBaseLink("KLOGINFOOTER");
        var d = unescape(c);
        var e = a("#footerBox");
        if (e.length == 1 && a.trim(d) != "") {
            a.getJSON(d, function (f) {
                e.html(unescape(f.html))
            })
        }
    };
    b.loginOut = function () {
        var c = "/kcms/Logout.aspx?url=" + encodeURIComponent(window.location.href);
        a.post(c, null, null);
        KLogin.getHeader()
    };
    b.loginIn = function (c) {
        var d = window.location.href;
        if (d.indexOf("uid=") > 0) {
            d = SetQueryStringByName(d, "uid", c)
        } else {
            if (d.indexOf("?") > 0) {
                d = d + "&uid=" + c
            } else {
                d = d + "?uid=" + c
            }
        }
        var e = encodeURIComponent(d);
        window.location = d
    };
    b.loginSuccess = function (c) {
        KLogin.getHeader(c);
        KLogin.loginIn(c)
    };
    window.KLogin = b
})(jQuery);

function setPlaceholder(b) {
    var a = $(b).parent();
    if (a.attr("class") != "hidePlaceholder" && a.attr("class") != "showPlaceholder") {
        return
    }
    if ($(b).val() != "") {
        a.attr("class", "hidePlaceholder")
    } else {
        a.attr("class", "showPlaceholder")
    }
}

function LoadScript(a, c) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = a;
    document.getElementsByTagName("head")[0].appendChild(b);
    if (b.readyState) {
        b.onreadystatechange = function () {
            if (b.readyState == "loaded" || b.readyState == "complete") {
                b.onreadystatechange = null;
                if (c) {
                    c()
                }
            }
        }
    } else {
        b.onload = function () {
            if (c) {
                c()
            }
        }
    }
}

function getCurrentDate() {
    var f = new Date();
    var a = "-";
    var c = f.getFullYear();
    var e = f.getMonth() + 1;
    var b = f.getDate();
    if (e >= 1 && e <= 9) {
        e = "0" + e
    }
    if (b >= 0 && b <= 9) {
        b = "0" + b
    }
    var d = c + a + e + a + b;
    document.write(d)
}

function checkBoxFn(a) {
    $(a).on("click", ".check-all", function (b) {
        b.preventDefault;
        $tablist = $(this).parents(a);
        $inputlist = $tablist.find("td input[type='checkbox']");
        if ($(this).prop("checked")) {
            $inputlist.prop("checked", true);
            len = $inputlist.length;
            $(this).siblings("label").find("em").html(len)
        } else {
            $inputlist.prop("checked", false);
            $(this).siblings("label").find("em").html(0)
        }
    });
    $(a).siblings(".toolbar").on("click", ".check-invert", function (b) {
        b.preventDefault;
        $tablist = $(this).parents(".toolbar").siblings(a);
        $inputlist = $tablist.find("td input[type='checkbox']");
        checkAllBtn = $tablist.find(".check-all");
        $inputlist.each(function () {
            if ($(this).prop("checked")) {
                $(this).prop("checked", false)
            } else {
                $(this).prop("checked", true)
            }
        });
        count = $tablist.find("td input[type='checkbox']:checked").length;
        len = $inputlist.length;
        if (count == len) {
            checkAllBtn.prop("checked", true)
        }
        if (count == 0) {
            checkAllBtn.prop("checked", false)
        }
    });
    $(a).find("td input[type='checkbox']").on("click", function (b) {
        b.preventDefault;
        $tablist = $(this).parents(a);
        $inputlist = $tablist.find("td input[type='checkbox']");
        checkAllBtn = $tablist.find(".check-all");
        len = $inputlist.length;
        if ($(this).prop("checked")) {
            count = $tablist.find("td input[type='checkbox']:checked").length;
            if (count == len) {
                checkAllBtn.prop("checked", true)
            }
        } else {
            checkAllBtn.prop("checked", false)
        }
    })
}

function setQrcode() {
    dllinkBox = $(".dllink-down");
    if (dllinkBox.hasClass("no-qrcode")) {
        $(".btn-phone").hide();
        return
    }
    var b = $(".dllink").eq(0).find("a.icon");
    var a = b.length;
    w = a * b.eq(1).outerWidth(true);
    if (w > dllinkBox.width()) {
        dllinkBox.width(w)
    }
}

function getCookie(a) {
    var c;
    c = "";
    var b = a + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(b);
        if (offset != -1) {
            offset += b.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) {
                end = document.cookie.length
            }
            c = document.cookie.substring(offset, end);
            c = decodeURIComponent(c);
            return c
        }
    }
    return c
}

function modifyEcpHeaderN() {
    $(".ecp_tn-nav").remove();
    $("#Ecp_header_mycnki").remove();
    var b = "https://ishufang.cnki.net/KPC?t=" + Math.random();
    var c = "http://elib.cnki.net/logindigital.aspx?action=single&p=" + getUInfoFromECP("buname") + "&uid=" + getCookie("LID");
    var a = "<li><a id='Ecp_GrsfLink' href=" + b + " title='个人书房' target='_blank'>个人书房</a></li>";
    var d = "<li><a id='Ecp_JggLink' href=" + c + " title='我的机构馆' target='_blank'>我的机构馆</a></li>";
    if ($("#Ecp_MycnkiLink").length > 0) {
        $("#Ecp_GrsfLink").remove();
        $("#Ecp_MycnkiLink").parent().before(a)
    }
    if ($("#Ecp_top_logoutJgClick1").length > 0) {
        $("#Ecp_JggLink").remove();
        $("#Ecp_top_logoutJgClick1").parent().before(d)
    }
}

function modifyEcpHeader(a) {
    $("#Ecp_header_Help").before("<a  class='ecp_tn-tab' href='//www.cnki.net/subpages/webMap.html'><i>网站地图</i></a>");
    $("#Ecp_header_ChargeCenter").before(grsfhtml());
    if (isnonacad()) {
        a = false
    }
    if (a) {
        $(".ecp_top-nav").append(logohtml())
    }
}

function grsfhtml() {
    var b = getUInfoFromECP("utype");
    var c = "";
    if (getCookie("LID")) {
        c = "uid=" + getCookie("LID")
    }
    var a = "<span class='mycnki topItem' id='spanmycnki'>";
    a += "<a id='link_mycnki' href='javascript:void(0);' onclick='setmycnkiclass()'>" + message.mybookroom + "<i class='ecp_tn-arrow'></i></a>";
    a += "<div id='pop_mycnki' class='topItemPop mycnkipop' style='display:none;'>";
    a += "<a class='close' href='javascript:void(0)' onclick='$(this).parent().hide()'>x</a>";
    a += "<div class='klogin_fr'>";
    a += "<ul class='mlist'>";
    a += "<li><a href='javascript:void(0)' onclick='openKpc()'>" + message.turnin + " <b>" + message.mybookroom + "</b> &gt;&gt;</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('fav_paper')>" + message.myaddfav + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('history_search')>" + message.myhistory + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('history_search')>" + message.myshistery + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('history_download')>" + message.mydhistery + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('history_brown')>" + message.mylhistery + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('custom')>" + message.myrss + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('citationTracking')>" + message.reftrack + "</a></li>";
    a += "<li><a href='javascript:void(0)' onclick=openKpc('myAchievement')>" + message.myachievment + "</a></li>";
    a += "</ul></div>";
    a += "<div class='klogin_fl'>";
    a += "<ul class='mlist'>";
    a += "<li class='prompt'><span>" + message.persontipa + "</span></li>";
    a += "</ul></div></div></span>";
    return a
}

function openKpc(a) {
    var b = getUInfoFromECP("utype");
    if (!b || b != "jf") {
        OpenLoginPage();
        return false
    }
    var d = "";
    if (!!a) {
        d = "#" + a
    }
    var c = "//ishufang.cnki.net/KPC?t=" + Math.random() + d;
    window.open(c, "kns_gerenshufang");
    return false
}

function OpenLoginPage() {
    var e = getUInfoFromECP("uname");
    var b = getUInfoFromECP("utype");
    var c = GetCookie("LID");
    if (parent.$("#Ecp_top_login_layer").css("display") == "none") {
        parent.$("#Ecp_top_login").click()
    }
    var a = "";
    if (!e || !b || !c) {
        a = "您好，该功能仅限个人账号使用，请您登录个人账号。"
    } else {
        if (b != "jf") {
            a = "当前为机构账号，请您切换到个人账号，个人书房及相关个性化服务仅对个人有效。"
        } else {
            parent.$("#Ecp_top_login_layer").css("display") = "none";
            return
        }
    }
    var d = "<li id='alertinfo' style='width: 230px!important;margin-left: -12px!important;padding: 10px 20px!important; line-height: 20px!important; border: 1px solid #fbba05;background-color:#fffae8;color: #DA0000; '>" + a + "</li>";
    parent.$("#alertinfo").remove();
    parent.$(".loginformlist").append(d);
    $("#Ecp_top_login_closeLayer").click(function () {
        parent.$("#alertinfo").remove();
        $("#alertinfo").remove()
    })
}

function mycnkihtml() {
    var b = "uid=" + getCookie("LID");
    var a = "<span class='mycnki topItem' id='spanmycnki'>";
    a += "<a id='link_mycnki' href='javascript:void(0);' onclick='setmycnkiclass()'>我的记录<i class='ecp_tn-arrow'></i></a>";
    a += "<div id='pop_mycnki' class='topItemPop mycnkipop' style='display:none;'>";
    a += "<a class='close' href='javascript:void(0)' onclick='$(this).parent().hide()'>x</a>";
    a += "<div class='klogin_fr'>";
    a += "<ul class='mlist'>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "' target='_blank'>进入 <b>我的记录</b> &gt;&gt;</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=keyWord' target='_parent'>我的检索词</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=recArticle' target='_parent'>我的推荐</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=downLoad' target='_parent'>我的下载</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=view' target='_parent'>我的浏览</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=read' target='_parent'>我的阅读</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=share' target='_parent'>我的分享</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=export' target='_parent'>我的导出</a></li>";
    a += "<li><a href='//kns.cnki.net/KMycnki/Mycnki/index?" + b + "&amp;turnId=analysis' target='_parent'>我的分析</a></li>";
    a += " <li><a href='//kns.cnki.net/knsdelivery/mycnki.aspx?" + b + "' target='_parent'>我的关注</a></li>";
    a += "</ul></div>";
    a += "<div class='klogin_fl'>";
    a += "<ul class='mlist'>";
    a += "<li class='prompt'><span>您好，登录可以查看更多信息</span></li>";
    a += "</ul></div></div></span>";
    return a
}

function logohtml() {
    var a = "<div class='Logo'>";
    a += "<a href='//www.cnki.net'>";
    a += "<img src='//piccache.cnki.net/kdn/nvsmkns/images/gb/logo.gif' alt='CNKI'>";
    a += "<img class='logohome' src='//piccache.cnki.net/kdn/nvsmkns/images/gb/home.gif'>";
    a += "</a></div>";
    return a
}

function setmycnkiclass() {
    $("#spanmycnki").toggleClass("topItemCur");
    $("#pop_mycnki").toggle()
}

function LoginSucess(data) {
    if (!data || !data.Uid || data.Uid == "undefined") {
        return
    }
    if (window.location.href.indexOf(data.Uid) > 0) {
        return
    }
    var URL = "/kcms/loginid.aspx?isr=0&uid=" + data.Uid;
    $.post(URL, function (uinfo) {
        if (uinfo) {
            var j = eval("(" + uinfo + ")");
            $("#loginuserid").val(j.userid);
            if (j.usertype == "1") {
                $(".qr-code").hide()
            }
        }
    })
}

function Ecp_LogoutOptr(b) {
    var a = "/kcms/Logout.aspx?url=" + encodeURIComponent(window.location.href);
    $.post(a, null, null)
}

function UserLogout() {
    var a = "/kcms/Logout.aspx?url=" + encodeURIComponent(window.location.href);
    $.post(a, null, null)
}

function isnonacad() {
    var b = ",CJFT,CJFU,CJFV,CJFX";
    var a = GetQueryStringByName(location.href, "dbcode");
    if (a) {
        a = a.toUpperCase()
    }
    var c = GetQueryStringByName(location.href, "sfield");
    if (b.indexOf(a) > 0 && (c == null || c == "")) {
        return true
    } else {
        return false
    }
}

function setLoginState() {
    if (isLoginByCookie()) {
        initLoginStr();
        $(".login").html(loginStr);
        $(".register").hide()
    }
}

var nameStr = "<a href='//ishufang.cnki.net/kpc' target='_blank'>{unit}</a>";
var loginStr = '<div id="logintemplate">{namestr}！&nbsp;{libhtml}<a href="javascript:void(0);" onclick=logoutn() id="loginOut"">' + message.logout + ' </a><input type="hidden" id="userid" name="userid" value=\'{uid}\' /><input type="hidden" id="username" name="username" value=\'{username}\' /><input type="hidden" id="usertype" name="usertype" value=\'{usertype}\' /></div>';

function initLoginStr() {
    var b = getUInfoFromECP("sname");
    var e = message.welcome + " ";
    var f = "http://elib.cnki.net/logindigital.aspx?action=single&uid=" + getUidFromCookie() + "&p=" + getUInfoFromECP("uname");
    var h = "";
    var c = getUidFromCookie();
    var d = getUInfoFromECP("uname");
    var a = getUInfoFromECP("utype");
    var g = "";
    if (a && a.toLowerCase() == "bk") {
        h = "<a href='" + f + "' target='_blank'>" + message.myjgg + "</a>";
        if (b) {
            e = e + b
        } else {
            e = e + d
        }
        g = e
    } else {
        if (a && a.toLowerCase() == "jf") {
            h = "<a href='" + f + "' target='_blank'>" + message.mygrg + "</a>";
            e = e + d;
            g = nameStr.replace("{unit}", e)
        }
    }
    loginStr = loginStr.replace("{namestr}", g);
    loginStr = loginStr.replace("{libhtml}", h);
    loginStr = loginStr.replace("{uid}", c);
    loginStr = loginStr.replace("{username}", d);
    loginStr = loginStr.replace("{usertype}", a)
}

var strLogin = '<a class="btn-login" target="_self" href="//login.cnki.net/login/?platform=kcms&ReturnURL=' + location.href + '">' + message.login + "</a>";

function logoutn() {
    $.ajax({
        url: "//login.cnki.net/toplogin/api/loginapi/Logout?callback=?",
        type: "get",
        dataType: "jsonp",
        success: function () {
            $(".login").html(strLogin);
            $(".register").show();
            logout()
        },
        error: function () {
            $(".login").html(strLogin);
            $(".register").show();
            logout()
        }
    })
}

function getUInfoFromECP(o) {
    if (!o) {
        return ""
    }
    var ecpjosn = GetCookie("Ecp_LoginStuts");
    if (ecpjosn) {
        ecpjosn = decodeURIComponent(ecpjosn);
        var ecpjosntype = eval("(" + ecpjosn + ")");
        switch (o) {
            case"uname":
                return ecpjosntype.UserName;
            case"utype":
                return ecpjosntype.UserType;
            case"sname":
                return decodeURI(decodeURIComponent(ecpjosntype.ShowName));
            case"buname":
                return ecpjosntype.BUserName;
            case"butype":
                return ecpjosntype.BUserType;
            case"bsname":
                return decodeURI(decodeURIComponent(ecpjosntype.BShowName));
            default:
                return ""
        }
    }
    return ""
}

function getUidFromCookie() {
    var b = "";
    var a = GetCookie("LID");
    if (a) {
        b = a
    }
    return b
}

function isLoginByCookie() {
    var a = false;
    if (getUInfoFromECP("uname") != "") {
        a = true
    }
    return a
}

function ToBootPage() {
    var b = $("#username").val();
    var a = $("#usertype").val();
    if (b && a) {
        if (a == "0") {
            $.ajax({
                url: "http://my.cnki.net/leadsystem/api/leadresult/username/" + b + "?type=bk&ip=",
                type: "get",
                dataType: "jsonp",
                jsonp: "jsonpcallback",
                success: function (j) {
                    var c = "";
                    var d = j;
                    if (j instanceof Array) {
                        d = j
                    } else {
                        d = JSON.parse(j)
                    }
                    if (!d || d.length <= 0) {
                        return
                    }
                    var g = d[0];
                    for (i = 0; i < g.length; i++) {
                        var f = g[i].productname;
                        var e = g[i].url;
                        if (f && e) {
                            var h = "<p><i></i><a href='" + e + "' target='_blank'>" + f + "</a></p>";
                            c += h
                        }
                    }
                    if (c != "") {
                        loginCon = $("<div>").addClass("loginTanCon");
                        $("<h2>").html("<i></i>已订购产品").append($("<em>").addClass("loginClose")).appendTo(loginCon);
                        $("<div>").addClass("loginTxt").html(c).appendTo(loginCon);
                        $("<span>").addClass("loginBtnClose").html("关闭").appendTo(loginCon);
                        $("body").append(loginCon);
                        loginCon.on("click", ".loginBtnClose,.loginClose", function (k) {
                            k.preventDefault();
                            loginCon.remove()
                        })
                    }
                },
                error: function (c) {
                }
            })
        }
    }
}

function searchBoxSubmit() {
    if (checkformpram()) {
        $(".search-form form").submit()
    }
}

function checkformpram() {
    var c = $(".searchbtn").siblings(".search-input").val();
    var b = $(".search-input").attr("placeholder");
    if (c == null || $.trim(c) == "" || c == b) {
        window.open("https://www.cnki.net");
        return false
    }
    var a = /select|update|delete|truncate|join|union|exec|insert|drop|count|&|"|>|<|%/i;
    if (a.test($.trim(c))) {
        alert(message.inputParmsError);
        return false
    }
    return true
}

function backTop() {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 360) {
                $("#backtop").show()
            } else {
                $("#backtop").hide()
            }
            if ($("#DownLoadParts").length > 0) {
                var a = (jQuery(window).scrollTop() > (jQuery("#DownLoadParts").offset().top + jQuery("#DownLoadParts").outerHeight())) || ((jQuery(window).scrollTop() + jQuery(window).height()) < jQuery("#DownLoadParts").offset().top);
                if (a) {
                    $(".operate-fixed").show()
                } else {
                    $(".operate-fixed").hide()
                }
            }
        })
    })
}

function openCurTag(a) {
    if (!a) {
        return
    }
    $(a).addClass("cur").siblings("li").removeClass("cur");
    $(a).parent().parent().find(".module-con").hide();
    $(a).parent().parent().find(".module-con").removeClass("active");
    if (!$(a).attr("id")) {
        return
    }
    var b = "div" + $(a).attr("id");
    if ($("#" + b).length > 0) {
        $("#" + b).addClass("active");
        $("#" + b).show()
    }
}

function controlFrame(e, h) {
    if (!e) {
        return
    }
    if (!h) {
        h = "800"
    }
    var j = $("#paramdbcode").val();
    var d = $("#paramfilename").val();
    var a = $("#paramdbname").val();
    var f = "frame" + $(e).attr("id");
    var g = h;
    var b = $(e).attr("data-code");
    var c = "/kcms/detail/frame/list.aspx?filename=" + d + "&dbcode=" + j + "&dbname=" + a + "&reftype=" + h;
    if (h == "803" && b) {
        c = c + "&curdbcode=" + b
    }
    if ($("#" + f).height() < 20) {
        LoadFile(f, c)
    }
    openCurTag(e)
}

function SetLawState(a) {
    if (!a) {
        return
    }
    if ($("#divlawstate").html()) {
        if ($("#divlawstate").is(":visible")) {
            $("#divlawstate").hide()
        } else {
            $("#divlawstate").show()
        }
    } else {
        RenderAjaxInfo("gbserach", "SCPD", "SCPD", a, "divlawstate")
    }
}

function SetCisdState() {
    var a = $("#cisdfilestate").val();
    if (!a) {
        return
    }
    a = a.trim();
    if (a == "现行" || a == "即将实施") {
        $("#CISD_BDT").hide()
    }
}

function panginSetPage() {
    $(".fybox").show();
    var b = $("#orderReferenceUl li").length;
    if (!b || b == "undefined") {
        b = 0
    }
    var c = 1;
    if (!c || c == "undefined") {
        c = 1
    }
    var a = (c - 1) / 10 + 1;
    if (b > 10) {
        $(".fybox").show();
        $("#resultcount").show();
        $("#resultcount").text(PAGE_COUNT.format(Math.ceil(b / 10)))
    } else {
        $("#resultcount").text(PAGE_COUNT.format(Math.ceil(b / 10)));
        $(".fybox").hide()
    }
    $("#pagination2").pagination({
        currentPage: a,
        totalPage: Math.ceil(b / 10),
        isShow: false,
        count: 10,
        prevPageText: PAGE_PREV,
        nextPageText: PAGE_NEXT,
        callback: function (d) {
            getTurnFiles(d);
            ResezeParent(10);
            $(".ui-pagination-container input").hide();
            $(".ui-pagination-page-btn").hide()
        }
    });
    $(".ui-pagination-container input").hide();
    $(".ui-pagination-page-btn").hide()
}

function getTurnFiles(e) {
    if (!e) {
        return
    }
    var a = 10;
    var d = (e - 1) * 10 + 1;
    var b = e * 10;
    $("#orderReferenceUl li").each(function () {
        var c = $(this).attr("data-num");
        if (c >= d && c <= b) {
            $(this).show()
        } else {
            $(this).hide()
        }
    })
};