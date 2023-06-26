import React from 'react'
import Accordion from './Accordian'

const FAQ = () => {
    const accordionItems = [
        {
          title: 'How does URL shortening Work?',
          content: 'URL Shortening works by taking a long URL and creating a shorter, condenesed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destiniation.',
        },
        {
          title: 'Is it necessary to create an account to use the URL shortening service?',
          content: ' No, you can use the URL shortening service without creating an account. However, if you want to track your links, you will need to create an account.',
        },
        {
          title: 'Are the shortened links permanent? Will they ever expire?',
          content: ' Yes, the shortened links are permanent and will never expire. However, if you are using the free version of the service, your links will be deleted after 30 days of inactivity.',
        },
        {
            title: 'Can I customize my shortened links to reflect my brand or content?',
            content: ' Yes, you can customize your shortened links. You can choose a custom alias for your link as long as it is available. You can also choose a custom domain for your link.',
        },
        {
            title:'Can I track the performance of my shortened URLs?',
            content: ' Yes, you can track the performance of your shortened URLs. You can see the number of clicks, the location of the clicks, and the device used to click on the link.',
        },
        {
            title: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
            content: ' Yes, the URL shortening service is secure. The shortened links are protected against spam and malicious activity. The links are protected by a captcha system and a spam filter.',
        },
        {
            title:'What is a QR code and what can it do?',
            content: ' A QR code is a two-dimensional barcode that can be read by a smartphone camera. It can be used to store information such as a URL, a phone number, or an email address. It can be used to share information with others.',
        },
        {
            title:'Is there an API avaliable for integrating the URL shortening service into my own appliciation or websites?',
            content: ' Yes, there is an API avaliable for integrating the URL shortening service into your own appliciation or websites. You can find the API documentation here.',
        }
      ];
  return (
    <div>
        <div className='text-center'>
            <h2 className='text-2xl  font-bold'>FAQs</h2>
        </div>
        <div className="container mx-auto p-4">
      <Accordion items={accordionItems} />
    </div>
    </div>
  )
}

export default FAQ