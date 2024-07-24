const { time } = require("console");
const puppeteer = require("puppeteer");


exports.scrapeFlipkart = async(product) =>{
    try{
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        const query = product.split(' ').join('+');
        console.log(query);

        await page.goto(`https://www.flipkart.com/search?q=${query}`, { waitUntil:'networkidle2'})

        let length;
        const data = await page.evaluate(()=>{
            // const items = Array.from(document.querySelectorAll('.yKfJKb'))
            const items = Array.from(document.querySelectorAll('.tUxRFH, .slAVV4, ._1sdMkc  '))
            return items.map((item)=>{
                
               
                const titleElement = item.querySelector('.KzDlHZ, .wjcEIp, .syl9yP') 
                const imageElement = item.querySelector('._53J4C-, .DByuf4')
                const priceElement = item.querySelector('.Nx9bqj ');
                const linkElement = item.querySelector('.CGtC98, .wjcEIp, .WKTcLC')

                

                return {
                    title: titleElement ? titleElement.innerHTML.trim() : 'N/A',
                    price: priceElement ? priceElement.innerHTML.trim() : 'N/A', 
                    image: imageElement ? imageElement.getAttribute('src') : 'N/A',
                    link: linkElement ? `https://www.flipkart.com${linkElement.getAttribute('href')}` : 'N/A'
                   
                };
            }).filter(item => item.title!== 'N/A'); 
            
        })
        length = data.length;
       


        await browser.close()
        return data;
    }
    catch(error){
        console.log(error);
    }
}