((function(){$(document).ready(function(){$("body").wrapInner('<div class="container clearfix"></div>');$(".console-session > pre").hide();$("body").append('<a id="expand-all-the-things"></a>');$("#expand-all-the-things").toggle(function(a){$(".console-session > pre").show();return a.preventDefault()},function(){$(".console-session > pre").hide();return e.preventDefault()});$(".console-session").each(function(){var a;if($(this).has("h4 + pre")){a=$(this).find("h4").addClass("snippet-closed");return a.addClass("expandable").toggle(function(){$(this).toggleClass("snippet-closed");return $(this).parent().find("pre:first").slideDown("fast")},function(){$(this).toggleClass("snippet-closed");return $(this).parent().find("pre:first").hide()})}});return $("#table_of_contents ul").each(function(){if($(this).children().size()===0)return $(this).remove()})})})).call(this);