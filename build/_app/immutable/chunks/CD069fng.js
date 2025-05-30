import{c as y,b as u,t as g,a as w}from"./B9UmkhgN.js";import"./3zJofmEL.js";import{b as v,a as x,a2 as F,d as D,h as m,a3 as b,c as k,a8 as q,aj as T,ak as M,U as A,al as i,am as B,a9 as L}from"./Cu3mfQ7C.js";function t(l,o,r,p,c){var s=l,a="",n;v(()=>{if(a===(a=o()??"")){m&&b();return}n!==void 0&&(D(n),n=void 0),a!==""&&(n=x(()=>{if(m){k.data;for(var e=b(),h=e;e!==null&&(e.nodeType!==8||e.data!=="");)h=e,e=q(e);if(e===null)throw T(),M;u(k,h),s=A(e);return}var f=a+"",d=y(f);u(F(d),d.lastChild),s.before(d)}))})}const _={title:"Test Post two",date:"2021-12-14",categories:["numbers","even"]},{title:R,date:I,categories:P}=_;var H=g(`<h1 id="markdown-syntax"><a aria-hidden="true" tabindex="-1" href="#markdown-syntax"><span class="icon icon-link"></span></a>Markdown: Syntax</h1> <ul><li><a href="#overview">Overview</a> <ul><li><a href="#philosophy">Philosophy</a></li> <li><a href="#html">Inline HTML</a></li> <li><a href="#autoescape">Automatic Escaping for Special Characters</a></li></ul></li> <li><a href="#block">Block Elements</a> <ul><li><a href="#p">Paragraphs and Line Breaks</a></li> <li><a href="#header">Headers</a></li> <li><a href="#blockquote">Blockquotes</a></li> <li><a href="#list">Lists</a></li> <li><a href="#precode">Code Blocks</a></li> <li><a href="#hr">Horizontal Rules</a></li></ul></li> <li><a href="#span">Span Elements</a> <ul><li><a href="#link">Links</a></li> <li><a href="#em">Emphasis</a></li> <li><a href="#code">Code</a></li> <li><a href="#img">Images</a></li></ul></li> <li><a href="#misc">Miscellaneous</a> <ul><li><a href="#backslash">Backslash Escapes</a></li> <li><a href="#autolink">Automatic Links</a></li></ul></li></ul> <p><strong>Note:</strong> This document is itself written using Markdown; you
can <a href="/projects/markdown/syntax.text">see the source for it by adding ‘.text’ to the URL</a>.</p> <hr> <h2 id="overview"><a aria-hidden="true" tabindex="-1" href="#overview"><span class="icon icon-link"></span></a>Overview</h2> <h3 id="philosophy"><a aria-hidden="true" tabindex="-1" href="#philosophy"><span class="icon icon-link"></span></a>Philosophy</h3> <p>Markdown is intended to be as easy-to-read and easy-to-write as is feasible.</p> <p>Readability, however, is emphasized above all else. A Markdown-formatted
document should be publishable as-is, as plain text, without looking
like it’s been marked up with tags or formatting instructions. While
Markdown’s syntax has been influenced by several existing text-to-HTML
filters — including <a href="http://docutils.sourceforge.net/mirror/setext.html" rel="nofollow">Setext</a>, <a href="http://www.aaronsw.com/2002/atx/" rel="nofollow">atx</a>, <a href="http://textism.com/tools/textile/" rel="nofollow">Textile</a>, <a href="http://docutils.sourceforge.net/rst.html" rel="nofollow">reStructuredText</a>, <a href="http://www.triptico.com/software/grutatxt.html" rel="nofollow">Grutatext</a>, and <a href="http://ettext.taint.org/doc/" rel="nofollow">EtText</a> — the single biggest source of
inspiration for Markdown’s syntax is the format of plain text email.</p> <h2 id="block-elements"><a aria-hidden="true" tabindex="-1" href="#block-elements"><span class="icon icon-link"></span></a>Block Elements</h2> <h3 id="paragraphs-and-line-breaks"><a aria-hidden="true" tabindex="-1" href="#paragraphs-and-line-breaks"><span class="icon icon-link"></span></a>Paragraphs and Line Breaks</h3> <p>A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line — a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.</p> <p>The implication of the “one or more consecutive lines of text” rule is
that Markdown supports “hard-wrapped” text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type’s “Convert Line Breaks” option) which translate every line break
character in a paragraph into a <code>&lt;br /&gt;</code> tag.</p> <p>When you <em>do</em> want to insert a <code>&lt;br /&gt;</code> break tag using Markdown, you
end a line with two or more spaces, then type return.</p> <h3 id="headers"><a aria-hidden="true" tabindex="-1" href="#headers"><span class="icon icon-link"></span></a>Headers</h3> <p>Markdown supports two styles of headers, [Setext][1] and [atx][2].</p> <p>Optionally, you may “close” atx-style headers. This is purely
cosmetic — you can use this if you think it looks better. The
closing hashes don’t even need to match the number of hashes
used to open the header. (The number of opening hashes
determines the header level.)</p> <h3 id="blockquotes"><a aria-hidden="true" tabindex="-1" href="#blockquotes"><span class="icon icon-link"></span></a>Blockquotes</h3> <p>Markdown uses email-style <code>&gt;</code> characters for blockquoting. If you’re
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard
wrap the text and put a <code>&gt;</code> before every line:</p> <blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p> <p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.</p></blockquote> <p>Markdown allows you to be lazy and only put the <code>&gt;</code> before the first
line of a hard-wrapped paragraph:</p> <blockquote><p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p></blockquote> <blockquote><p>Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.</p></blockquote> <p>Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of <code>&gt;</code>:</p> <blockquote><p>This is the first level of quoting.</p> <blockquote><p>This is nested blockquote.</p></blockquote> <p>Back to the first level.</p></blockquote> <p>Blockquotes can contain other Markdown elements, including headers, lists,
and code blocks:</p> <blockquote><h2 id="this-is-a-header"><a aria-hidden="true" tabindex="-1" href="#this-is-a-header"><span class="icon icon-link"></span></a>This is a header.</h2> <ol><li>This is the first list item.</li> <li>This is the second list item.</li></ol> <p>Here’s some example code:</p> <p>return shell_exec(“echo $input | $markdown_script”);</p></blockquote> <p>Any decent text editor should make email-style quoting easy. For
example, with BBEdit, you can make a selection and choose Increase
Quote Level from the Text menu.</p> <h3 id="lists"><a aria-hidden="true" tabindex="-1" href="#lists"><span class="icon icon-link"></span></a>Lists</h3> <p>Markdown supports ordered (numbered) and unordered (bulleted) lists.</p> <p>Unordered lists use asterisks, pluses, and hyphens — interchangably
— as list markers:</p> <ul><li>Red</li> <li>Green</li> <li>Blue</li></ul> <p>is equivalent to:</p> <ul><li>Red</li> <li>Green</li> <li>Blue</li></ul> <p>and:</p> <ul><li>Red</li> <li>Green</li> <li>Blue</li></ul> <p>Ordered lists use numbers followed by periods:</p> <ol><li>Bird</li> <li>McHale</li> <li>Parish</li></ol> <p>It’s important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:</p> <p>If you instead wrote the list in Markdown like this:</p> <ol><li>Bird</li> <li>McHale</li> <li>Parish</li></ol> <p>or even:</p> <ol start="3"><li>Bird</li> <li>McHale</li> <li>Parish</li></ol> <p>you’d get the exact same HTML output. The point is, if you want to,
you can use ordinal numbers in your ordered Markdown lists, so that
the numbers in your source match the numbers in your published HTML.
But if you want to be lazy, you don’t have to.</p> <p>To make lists look nice, you can wrap items with hanging indents:</p> <ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.</li> <li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul> <p>But if you want to be lazy, you don’t have to:</p> <ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.</li> <li>Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.</li></ul> <p>List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces
or one tab:</p> <ol><li><p>This is a list item with two paragraphs. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit. Aliquam hendrerit
mi posuere lectus.</p> <p>Vestibulum enim wisi, viverra nec, fringilla in, laoreet
vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
sit amet velit.</p></li> <li><p>Suspendisse id sem consectetuer libero luctus adipiscing.</p></li></ol> <p>It looks nice if you indent every line of the subsequent
paragraphs, but here again, Markdown will allow you to be
lazy:</p> <ul><li><p>This is a list item with two paragraphs.</p> <p>This is the second paragraph in the list item. You’re
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.</p></li> <li><p>Another item in the same list.</p></li></ul> <p>To put a blockquote within a list item, the blockquote’s <code>&gt;</code> delimiters need to be indented:</p> <ul><li><p>A list item with a blockquote:</p> <blockquote><p>This is a blockquote
inside a list item.</p></blockquote></li></ul> <p>To put a code block within a list item, the code block needs
to be indented <em>twice</em> — 8 spaces or two tabs:</p> <ul><li><p>A list item with a code block:</p> <code goes="" here=""></code></li></ul> <h3 id="code-blocks"><a aria-hidden="true" tabindex="-1" href="#code-blocks"><span class="icon icon-link"></span></a>Code Blocks</h3> <p>Pre-formatted code blocks are used for writing about programming or
markup source code. Rather than forming normal paragraphs, the lines
of a code block are interpreted literally. Markdown wraps a code block
in both <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code> tags.</p> <p>To produce a code block in Markdown, simply indent every line of the
block by at least 4 spaces or 1 tab.</p> <p>This is a normal paragraph:</p> <!> <p>Here is an example of AppleScript:</p> <!> <p>Json:</p> <!> <p>python:</p> <!> <p>A code block continues until it reaches a line that is not indented
(or the end of the article).</p> <p>Within a code block, ampersands (<code>&</code>) and angle brackets (<code>&lt;</code> and <code>&gt;</code>)
are automatically converted into HTML entities. This makes it very
easy to include example HTML source code using Markdown — just paste
it and indent it, and Markdown will handle the hassle of encoding the
ampersands and angle brackets. For example, this:</p> <div class="footer">&copy; 2004 Foo Corporation</div> <p>Regular Markdown syntax is not processed within code blocks. E.g.,
asterisks are just literal asterisks within a code block. This means
it’s also easy to use Markdown to write about Markdown’s own syntax.</p> <!> <h2 id="span-elements"><a aria-hidden="true" tabindex="-1" href="#span-elements"><span class="icon icon-link"></span></a>Span Elements</h2> <h3 id="links"><a aria-hidden="true" tabindex="-1" href="#links"><span class="icon icon-link"></span></a>Links</h3> <p>Markdown supports two style of links: <em>inline</em> and <em>reference</em>.</p> <p>In both styles, the link text is delimited by [square brackets].</p> <p>To create an inline link, use a set of regular parentheses immediately
after the link text’s closing square bracket. Inside the parentheses,
put the URL where you want the link to point, along with an <em>optional</em> title for the link, surrounded in quotes. For example:</p> <p>This is <a href="http://example.com/" rel="nofollow">an example</a> inline link.</p> <p><a href="http://example.net/" rel="nofollow">This link</a> has no title attribute.</p> <h3 id="emphasis"><a aria-hidden="true" tabindex="-1" href="#emphasis"><span class="icon icon-link"></span></a>Emphasis</h3> <p>Markdown treats asterisks (<code>*</code>) and underscores (<code>_</code>) as indicators of
emphasis. Text wrapped with one <code>*</code> or <code>_</code> will be wrapped with an
HTML <code>&lt;em&gt;</code> tag; double <code>*</code>’s or <code>_</code>’s will be wrapped with an HTML <code>&lt;strong&gt;</code> tag. E.g., this input:</p> <p><em>single asterisks</em></p> <p><em>single underscores</em></p> <p><strong>double asterisks</strong></p> <p><strong>double underscores</strong></p> <h3 id="code"><a aria-hidden="true" tabindex="-1" href="#code"><span class="icon icon-link"></span></a>Code</h3> <p>To indicate a span of code, wrap it with backtick quotes (<code>\`</code>).
Unlike a pre-formatted code block, a code span indicates code within a
normal paragraph. For example:</p> <p>Use the <code>printf()</code> function.</p>`,1);function z(l){var o=H(),r=i(B(o),118);t(r,()=>'<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span>    This is a code block.</span></span></code></pre>');var p=i(r,4);t(p,()=>`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span>    tell application "Foo"</span></span>
<span class="line"><span>        beep</span></span>
<span class="line"><span>    end tell</span></span></code></pre>`);var c=i(p,4);t(c,()=>`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#89DDFF">&#123;</span></span>
<span class="line"><span style="color:#89DDFF">  "</span><span style="color:#C792EA">firstName</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> "</span><span style="color:#C3E88D">John</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">,</span></span>
<span class="line"><span style="color:#89DDFF">  "</span><span style="color:#C792EA">lastName</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">:</span><span style="color:#89DDFF"> "</span><span style="color:#C3E88D">Smith</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">,</span></span>
<span class="line"><span style="color:#89DDFF">  "</span><span style="color:#C792EA">age</span><span style="color:#89DDFF">"</span><span style="color:#89DDFF">:</span><span style="color:#F78C6C"> 25</span></span>
<span class="line"><span style="color:#89DDFF">&#125;</span></span></code></pre>`);var s=i(c,4);t(s,()=>`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#89DDFF">for</span><span style="color:#BBBBBB"> i </span><span style="color:#89DDFF">in</span><span style="color:#82AAFF"> range</span><span style="color:#89DDFF">(</span><span style="color:#F78C6C">10</span><span style="color:#89DDFF">):</span></span>
<span class="line"><span style="color:#82AAFF">    print</span><span style="color:#89DDFF">(</span><span style="color:#82AAFF">i</span><span style="color:#89DDFF">)</span></span></code></pre>`);var a=i(s,10);t(a,()=>`<pre class="shiki aurora-x" style="background-color:#07090F;color:#bbbbbb" tabindex="0"><code><span class="line"><span>tell application "Foo"</span></span>
<span class="line"><span>    beep</span></span>
<span class="line"><span>end tell</span></span></code></pre>`),L(32),w(l,o)}export{z as default,_ as metadata};
//# sourceMappingURL=CD069fng.js.map
