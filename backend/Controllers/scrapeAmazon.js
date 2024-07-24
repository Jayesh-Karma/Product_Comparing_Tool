const { time } = require("console");
const puppeteer = require("puppeteer");


exports.scrapeAmazon = async(product) =>{
    try{
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        const query = product.split(' ').join('+');
        console.log(query);

        await page.goto(`https://www.amazon.in/s?k=${query}`, { waitUntil:'networkidle2'})

        let length;
        const data = await page.evaluate(()=>{

            const items = Array.from(document.querySelectorAll('.puis-card-container'))
            return items.map((item)=>{
                
               
                const titleElement = item.querySelector('span.a-size-medium, span.a-color-base, span.a-text-normal') 
                const imageElement = item.querySelector('.s-image')
                const priceElement = item.querySelector('.a-price-whole');
                const linkElement = item.querySelector('.a-link-normal, .s-link-style')

                

                return {
                    title: titleElement ? titleElement.innerHTML.trim() : 'N/A',
                    price: priceElement ? priceElement.innerHTML.trim() : 'N/A', 
                    image: imageElement ? imageElement.getAttribute('src') : 'N/A',
                    link: linkElement ? `https://www.amazon.in${linkElement.getAttribute('href')}` : 'N/A'
                   
                };
            }).filter(item => item.title!== 'N/A' && item.price !== 'N/A'); 
            
        })
        length = data.length;

        await browser.close()
        return data;
    }
    catch(error){
        console.log(error);
    }
}