document.writeln("<!DOCTYPE html>");
document.writeln("<!--[if lt IE 7]>      <html class=\'no-js lt-ie9 lt-ie8 lt-ie7\'> <![endif]-->");
document.writeln("<!--[if IE 7]>         <html class=\'no-js lt-ie9 lt-ie8\'> <![endif]-->");
document.writeln("<!--[if IE 8]>         <html class=\'no-js lt-ie9\'> <![endif]-->");
document.writeln("<!--[if gt IE 8]><!--> <html class=\'no-js\'> <!--<![endif]-->");
document.writeln("    <head>");
document.writeln("        <meta charset=\'utf-8\'>");
document.writeln("        <meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge\'>");
document.writeln("        <title></title>");
document.writeln("        <meta name=\'description\' content=\'\'>");
document.writeln("        <meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'>");
document.writeln("        <link rel=\'stylesheet\' href=\'\'>");
document.writeln("    </head>");
document.writeln("    <body>");
document.writeln("        <!--[if lt IE 7]>");
document.writeln("            <p class=\'browsehappy\'>You are using an <strong>outdated</strong> browser. Please <a href=\'#\'>upgrade your browser</a> to improve your experience.</p>");
document.writeln("        <![endif]-->");
document.writeln("        <div class=\'banner\'>");
document.writeln("                <ul>");
document.writeln("                    <li class=\'disActive\' style=\'display: block\'><img src=\'./images/banner/banner1.jpg\'></li>");
document.writeln("                    <li class=\'disActive\'><img src=\'./images/banner/banner1.jpg\'></li>");
document.writeln("                    <li class=\'disActive\'><img src=\'./images/banner/banner1.jpg\'></li>");
document.writeln("                </ul>");
document.writeln("                <div class=\'pagination\'>");
document.writeln("                    <div id=\'0\' class=\'pagination-line\' style=\'background-color: #fff\'>");
document.writeln("                    </div>");
document.writeln("                    <div id=\'1\' class=\'pagination-line\'>");
document.writeln("                    </div>");
document.writeln("                    <div id=\'2\' class=\'pagination-line\'>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("            <script>");
document.writeln("                    window.onload = function () {");
document.writeln("                        var disActive = document.getElementsByClassName(\'disActive\');");
document.writeln("                        var line = document.getElementsByClassName(\'pagination-line\')");
document.writeln("                        var num = 0;");
document.writeln("                        for (var i = 0; i < 3; i++) {");
document.writeln("                            line[i].onclick = function () {");
document.writeln("                                for (var s = 0; s < 3; s++) {");
document.writeln("                                    disActive[s].removeAttribute(\'style\')");
document.writeln("                                    line[s].removeAttribute(\'style\')");
document.writeln("                                }");
document.writeln("                                num = this.id");
document.writeln("                                this.setAttribute(\'style\', \'background-color:#fff\')");
document.writeln("                                disActive[this.id].setAttribute(\'style\', \'display:block\')");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                        setInterval(function () {");
document.writeln("                            if (num < 2) {");
document.writeln("                                num++");
document.writeln("                            } else {");
document.writeln("                                num = 0");
document.writeln("                            }");
document.writeln("                            for (var j = 0; j < 3; j++) {");
document.writeln("                                disActive[j].removeAttribute(\'style\')");
document.writeln("                                line[j].removeAttribute(\'style\')");
document.writeln("                            }");
document.writeln("                            disActive[num].setAttribute(\'style\', \'display:block\')");
document.writeln("                            line[num].setAttribute(\'style\', \'background-color:#fff\')");
document.writeln("                        }, 5000)");
document.writeln("                    }");
document.writeln("                </script>");
document.writeln("    </body>");
document.writeln("</html>");