import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ShareButton({ urlRelease }: { urlRelease: string }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(urlRelease);
            setIsCopied(true);

            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Error copying link: ', err);
        }
    };

    return (
        <div className="text-center">
            <Button
                className="bg-purple-600 text-white transition-colors"
                onClick={handleCopy}
            >
                {isCopied ? 'Link copied!' : 'Share'}
            </Button>
        </div>
    );
}
