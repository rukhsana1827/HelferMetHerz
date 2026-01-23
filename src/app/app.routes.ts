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
                loadComponent: () => import('./feature/services/services').then(m => m.Services) 
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