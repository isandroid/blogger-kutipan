<script language='javascript'>//<![CDATA[
$(document).ready(function() {
    $(".blog-posts article .post-outer").append("<a name=\"footnotes\"><ol id=\"footnotes\"></ol></a>");
    footnote = 1;
    $(".footnote").each(function() {
        $(this).append("<sup><a id=\"cite_note-"+footnote+"-0\" href=\"#cite_note-"+footnote+"\">["+footnote+"]</a></sup>");
        sumber="<li id=\"cite_note-"+footnote+"\">";
        url=$(this).attr("sumber");
        judul=$(this).attr("judul");
        if(judul && url) {
            sumber+="<a href=\"#cite_note-"+footnote+"-0\">^</a> <a href=\""+url+"\">"+judul+"</a>";
        } else if(judul) {
            sumber+="<a href=\"#cite_note-"+footnote+"-0\">^</a> " + judul;
        } else if(url) {
            sumber+="<a href=\"#cite_note-"+footnote+"-0\">^</a> <a href=\""+url+"\">"+url+"</a>";
        }
        sumber+="</li>";
        $("#footnotes").append(sumber);
        footnote++;
    });
});//]]>
</script>