import KOSIUKO from "../img/ecommerce3.mp4"
import ALTIORA from "../img/enterprice2.mp4"
import NONSTOP from "../img/enterprice4.mp4"
import FARMAGRAM from "../img/enterprice3.mp4"
import FARMAGRAM1 from "../img/enterprice1.mp4"
import tradingApp from "../img/enterprice3.mp4"//credit
import bankingApp from "../img/enterprice3.mp4"//credit
import ecklypceImg from "../img/ecklypce.jpg"
import pilchaImg from "../img/pilcha.jpg"

export const projects = [
    {
        group: "Frontend E-commerce",
        projects: [
            {
                title: "Ecklypce",
                image: ecklypceImg,
                desc: "Fashion brand e-commerce with modern design",
                links: {
                    web: "https://www.ecklypce.com/",
                    instagram: "https://www.instagram.com/ecklypce/"
                }
            },
            {
                title: "Pilcha SM",
                image: pilchaImg,
                desc: "Multi-brand clothing marketplace",
                links: {
                    web: "https://pilchasm.github.io/pilcha.sm",
                    instagram: "https://www.instagram.com/pilcha.sm/"
                }
            },
            {
                title: "Wholesale Fashion",
                film: KOSIUKO,
                desc: "wholesale clothing platform, internal to the company"
            }
        ]
    },
    {
        group: "Frontend Financial",
        projects: [
            {
                title: "Investment Platform",
                film: tradingApp,
                desc: "Trading interface (Web & Mobile)",
                hasWebAndMobile: true
            },
            {
                title: "Banking Dashboard",
                film: bankingApp,
                desc: "Digital wallet (Web & Mobile)",
                hasWebAndMobile: true
            }
        ]
    },
    {
        group: "Frontend Enterprise",
        projects: [
            {
                title: "Production Dashboard",
                film: ALTIORA,
                desc: "Manufacturing control interface"
            },
            {
                title: "Quality Control",
                film: FARMAGRAM1,
                desc: "Quality tracking dashboard"
            },
            {
                title: "Billing Interface",
                film: FARMAGRAM,
                desc: "Invoice management system"
            },
            {
                title: "CRM Dashboard",
                film: NONSTOP,
                desc: "Client management interface"
            }
        ]
    }
];
