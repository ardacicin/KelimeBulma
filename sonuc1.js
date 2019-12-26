<%-- 
    Document   : Sonuç1
    Created on : Dec 12, 2017, 2:56:40 AM
    Author     : ardaoyan
--%>

<%@page import="java.net.URL"%>
<%@page import="java.net.HttpURLConnection"%>
<%@page import="java.io.InputStreamReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="org.jsoup.select.Elements"%>
<%@page import="org.jsoup.nodes.Element"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.jsoup.nodes.Document"%>
<%@page import="org.jsoup.Jsoup"%>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <jsp:useBean id="bean" scope="session" class="veri.backhand" />
        <jsp:setProperty name="bean" property="url" />
        <jsp:setProperty name="bean" property="kelime" />
        
        <% 
         String url=bean.getUrl();   
         String kelime;
         kelime=bean.getKelime().toLowerCase();
         char[] kelimed = kelime.toCharArray();
         Document doc = Jsoup.connect(url).validateTLSCertificates(false).get();
         String title = doc.title();
         Element body = doc.body();
         String aranan;
         aranan=body.text().toLowerCase();
         char[] dizi= aranan.toCharArray();
         int sayac=0;
         int i=0,j=0;
        
         for (int w = 0; w < dizi.length; w++) {
                 if(dizi[w]=='ı')
                     dizi[w]='i';
                 else if (dizi[w]=='ö')
                     dizi[w]='o';
                 else if (dizi[w]=='ü')
                     dizi[w]='u';
                 else if (dizi[w]=='ç')
                     dizi[w]='c';
                 else if (dizi[w]=='ş')
                     dizi[w]='s';
                 else if (dizi[w]=='ğ')
                     dizi[w]='g';
         }
           for (j = 0; j <dizi.length; j++) {
             if(i==kelimed.length-1){
                 sayac++;
                 i=0;
             }  
             if (kelimed[i] == dizi[j]) {               
                       i++;
             }
             else{
                 i=0;
             }
         }
         for (int t = 0; t < dizi.length; t++) {
                  out.print(dizi[t]);
                   
         }
        for (int t = 0; t < kelimed.length; t++) {
                  out.print(kelimed[t]);
                   
         }
         out.print(sayac);        
    
        %>
        
    </body>
</html>
