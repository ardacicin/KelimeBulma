/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package veri;

import java.io.IOException;
import java.sql.SQLException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
/**
 *
 * @author ardaoyan
 */
public class backend {
    public static String kelime;
    public static String url;
    public backhand()
    {
    kelime=null;
    url=null;
    System.out.println("olusturuldu");
    }
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

   
    public String getKelime() {
        
        

        return kelime;
    }

    public void setKelime(String kelime) {
        
        kelime=kelime.replace('ı','i');
        kelime=kelime.replace('ü','u');
        kelime=kelime.replace('ö','o');
        kelime=kelime.replace('ç','c');
        kelime=kelime.replace('ş','s');
        kelime=kelime.replace('ğ','g');
        this.kelime = kelime;
    }
    
}
