"use client";

import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'; // Optional: for user feedback

export async function SubmitProductInquiryForm(formData) {
    try {
        // Prepare email parameters
        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.companyName,
            country: formData.country,
            productName: formData.productName || 'Not specified',
            quantity: formData.quantity,
            unit: formData.unit,
            comments: formData.comments || 'None',
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );

        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
        alert('Email sent successfully!'); // Optional: User feedback
        toast.success('Inquiry submitted successfully!'); // Optional: User feedback
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to submit inquiry. Please try again.'); 
        toast.error('Failed to submit inquiry. Please try again.'); // Optional: User feedback
        throw error;
    }
}

export async function SubmitContactUsForm(formData) {
    try {
        // Prepare email parameters
        const templateParams = {
            fullName: formData.name,
            email: formData.email,
            phone: formData.phone,
            companyName: formData.company,
            comments: formData.message || 'None',
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );

        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }
        alert('Email sent successfully!'); // Optional: User feedback
        toast.success('Request submitted successfully!'); // Optional: User feedback
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to submit Request. Please try again.'); 
        toast.error('Failed to submit inquiry. Please try again.'); // Optional: User feedback
        throw error;
    }
}