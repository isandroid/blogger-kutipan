<script language='javascript'>//<![CDATA[
function createFootnote(footnote, url, judul){
    sumber="<li id=\"cite_note-"+footnote+"\"><a href=\"#cite_note-"+footnote+"-0\">^</a>&nbsp;";
    if(judul && url) {
        sumber+="<a href=\""+url+"\">"+judul+"</a>";
    } else if(judul) {
        sumber+=judul;
    } else if(url) {
        sumber+="<a href=\""+url+"\">"+url+"</a>";
    }
    sumber+="</li>";
    $("#footnotes").append(sumber);
}
$(document).ready(function() {
    $(".blog-posts article .post-outer").append("<a name=\"footnotes\"><ol id=\"footnotes\"></ol></a>");
    footnote = 1;
    $("ref").each(function() {
        createFootnote(footnote, $(this).attr("sumber"), $(this).attr("judul"));
        $(this).replaceWith("<sup><a id=\"cite_note-"+footnote+"-0\" href=\"#cite_note-"+footnote+"\">["+footnote+"]</a></sup>");
        footnote++;
    });
});//]]>
</script>
