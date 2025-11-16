"use client";

import React, { useState, useEffect } from "react";
// We assume these Shadcn/UI components are available as per the developer role.
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function PrivacyModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [functionalChecked, setFunctionalChecked] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [externalContentChecked, setExternalContentChecked] = useState(false);
  const [showFurtherInfo, setShowFurtherInfo] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        const consent = localStorage.getItem("menzel_cookie_consent");
        if (!consent) {
          setIsVisible(true);
          document.body.style.overflow = "hidden";
        }
      } catch (error) {
        console.error("Could not access localStorage:", error);
      }
    }
  }, [isMounted]);

  const closeModal = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  const saveConsent = (consentSettings: {
    essential: boolean;
    functional: boolean;
    analytics: boolean;
    external: boolean;
  }) => {
    try {
      const consentDetails = {
        ...consentSettings,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(
        "menzel_cookie_consent",
        JSON.stringify(consentDetails)
      );
    } catch (error) {
      console.error("Could not write to localStorage:", error);
    } finally {
      closeModal();
    }
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      functional: true,
      analytics: true,
      external: true,
    });
  };

  const handleSaveAndClose = () => {
    saveConsent({
      essential: true,
      functional: functionalChecked,
      analytics: analyticsChecked,
      external: externalContentChecked,
    });
  };

  const handleAcceptEssential = () => {
    saveConsent({
      essential: true,
      functional: false,
      analytics: false,
      external: false,
    });
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 font-sans animate-in fade-in-0 duration-300">
      <div className="bg-white w-full max-w-lg p-6 md:p-8 space-y-6 overflow-y-auto max-h-[90vh] rounded-none">
        <h2 className="text-xl font-bold text-[#3a3a3a]">Privacy settings</h2>
        <p className="text-sm text-[#6b6b6b] leading-relaxed">
          Cookies are used on our website. Some of them are mandatory, while
          others allow us to improve your user experience on our website. By
          clicking on 'Accept all', you consent in accordance with Art. 6 para. 1 s. 1
          lit. a) DSGVO that your data is processed in the USA. In the opinion of the
          European Court of Justice, the data protection standard in the USA is
          inadequate and there is a risk that your data will be processed by US
          authorities for control and monitoring purposes, possibly without any legal
          remedies. If you only accept essential cookies, the transmission will not
          take place. You can withdraw your consent at any time.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Checkbox id="essential" checked disabled />
            <Label htmlFor="essential" className="text-base font-normal text-[#333] cursor-not-allowed">Essential</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="functional"
              checked={functionalChecked}
              onCheckedChange={(checked) => setFunctionalChecked(checked as boolean)}
            />
            <Label htmlFor="functional" className="text-base font-normal text-[#333] cursor-pointer">Functional</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="analytics"
              checked={analyticsChecked}
              onCheckedChange={(checked) => setAnalyticsChecked(checked as boolean)}
            />
            <Label htmlFor="analytics" className="text-base font-normal text-[#333] cursor-pointer">Analytics & marketing</Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox
              id="external"
              checked={externalContentChecked}
              onCheckedChange={(checked) => setExternalContentChecked(checked as boolean)}
            />
            <Label htmlFor="external" className="text-base font-normal text-[#333] cursor-pointer">External content</Label>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <Button
            onClick={handleAcceptAll}
            className="w-full bg-[#FFED00] text-black h-auto py-3.5 rounded-none uppercase text-sm font-bold hover:bg-[#FFED00]/90"
          >
            Accept all
          </Button>
          <Button
            onClick={handleSaveAndClose}
            className="w-full bg-[#e8e8e8] text-black h-auto py-3.5 rounded-none uppercase text-sm font-bold hover:bg-[#e8e8e8]/90"
          >
            Save & close
          </Button>
          <Button
            onClick={handleAcceptEssential}
            className="w-full bg-[#dcdcdc] text-black h-auto py-3.5 rounded-none uppercase text-sm font-bold hover:bg-[#dcdcdc]/90"
          >
            Only accept essential cookies
          </Button>
        </div>

        <div className="text-center pt-2">
             <button
                onClick={() => setShowFurtherInfo(!showFurtherInfo)}
                className="flex items-center justify-center space-x-2 mx-auto text-sm text-[#3a3a3a] hover:text-black"
            >
                <span>Display further information</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${ showFurtherInfo ? "rotate-180" : "" }`} />
            </button>
        </div>
        
        {showFurtherInfo && (
            <div className="text-xs text-neutral-600 space-y-3 p-4 bg-neutral-50 border rounded-sm -mt-2">
                <p><strong>Essential:</strong> These cookies are required to enable fundamental functions of this website.</p>
                <p><strong>Functional:</strong> These cookies enable us to analyse website usage in order to measure and improve performance.</p>
                <p><strong>Analytics & marketing:</strong> These cookies are used by advertising companies to serve ads that are relevant to your interests.</p>
                <p><strong>External content:</strong> We use third-party components on our website, such as Google Maps and YouTube, which may set their own cookies.</p>
            </div>
        )}

        <div className="text-center text-xs text-[#6b6b6b] border-t border-gray-200 pt-4">
          <a href="/legal-notice" className="hover:underline">Legal notice</a>
          <span className="mx-2">|</span>
          <a href="/privacy-policy" className="hover:underline">Privacy policy</a>
        </div>
      </div>
    </div>
  );
}