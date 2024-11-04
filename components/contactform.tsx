"use client";

import { useState } from "react";
import { contactSchema } from "../util/schema/contactschema";
import type { contactData } from "../util/schema/contactschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "financial planning",
    },
  });

  const onSubmit = async (data: contactData) => {
    console.log(data);
  };

  // Common input class names for styling
  const inputClassName =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500";
  const errorClassName = "text-sm text-red-600 mt-1";

  return (
    <div className="bg-white shadow-xl rounded-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={inputClassName}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className={errorClassName}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={inputClassName}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className={errorClassName}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+233 (123) 456-7890"
            {...register("phone")}
            className={inputClassName}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && <p className={errorClassName}>{errors.phone.message}</p>}
          <p className="text-xs text-gray-500 mt-1">
            Accepted formats: +233 (123) 456-7890, (123) 456-7890, 123-456-7890
          </p>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service Interest
          </label>
          <select
            id="service"
            {...register("service")}
            className={inputClassName}
            aria-invalid={errors.service ? "true" : "false"}
          >
            <option value="financial planning">Financial Planning</option>
            <option value="investment management">Investment Management</option>
            <option value="retirement planning">Retirement Planning</option>
            <option value="estate planning">Estate Planning</option>
            <option value="debt management">Debt Management</option>
            <option value="insuarance solutions">Insuarance Solutions</option>
            <option value="educational planning">Educational Planning</option>
            <option value="other">Other</option>
          </select>
          {errors.service && <p className={errorClassName}>{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className={inputClassName}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && <p className={errorClassName}>{errors.message.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        {success && (
          <div className="rounded-md bg-green-50 p-4 animate-fade-in">
            <div className="flex">
              <div className="text-sm text-green-700">Thank you for your message. We'll get back to you soon!</div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
