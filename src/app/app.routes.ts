import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./feature/layout/content/content').then(m => m.Content),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./feature/home/home').then(m => m.Home)
            },
            {
                path: 'services',
                // loadComponent: () => import('./feature/services/services').then(m => m.Services) ,
                children: [
                    {
                        path: 'service-alltagsbegleitung',
                        loadComponent: () => import('./feature/services/service-1/service-1').then(m => m.Service1)
                    },
                    {
                        path: 'service-haushaltshilfe',
                        loadComponent: () => import('./feature/services/service-2/service-2').then(m => m.Service2)
                    },
                    {
                        path: 'service-hausreinigung',
                        loadComponent: () => import('./feature/services/service-3/service-3').then(m => m.Service3)
                    },
                    {
                        path: 'service-kostenübernahme',
                        loadComponent: () => import('./feature/services/service-4/service-4').then(m => m.Service4)
                    }, {
                        path: 'service-babysitten',
                        loadComponent: () => import('./feature/services/service-5/service-5').then(m => m.Service5)
                    },
                    {
                        path: 'service-gartenpflege',
                        loadComponent: () => import('./feature/services/service-6/service-6').then(m => m.Service6)
                    }
                ]
            },
            {
                path: 'why-us',
                loadComponent: () => import('./feature/why-us/why-us').then(m => m.WhyUs)
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./feature/contact-us/contact-us').then(m => m.ContactUs)
            },
            {
                path: 'terms-of-service',
                loadComponent: () => import('./feature/terms-and-conditions/terms-and-conditions').then(m => m.TermsAndConditions)
            },
            {
                path: 'privacy-policy',
                loadComponent: () => import('./feature/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy)
            },
        ]
    },
    { path: '**', redirectTo: 'home' }
];