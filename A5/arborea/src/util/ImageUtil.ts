function getImagesFromCookie(): string[] {
    const cookies = document.cookie.split(';');
    const imageCookie = cookies.find(cookie => cookie.trim().startsWith('selectedImages='));

    if (imageCookie) {
        const value = imageCookie.split('=')[1];
        if (value) {
            try {
                return JSON.parse(decodeURIComponent(value));
            } catch {
                return [];
            }
        }
    }
    return [];
}

function saveImagesToCookie(images: string[]): void {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    document.cookie = `selectedImages=${encodeURIComponent(JSON.stringify(images))}; expires=${expiryDate.toUTCString()}; path=/`;
}

function addImageToCookie(src: string): void {
    const imgSrc = src;

    var currentImages = getImagesFromCookie();

    if (!currentImages.includes(imgSrc)) {
        currentImages.push(imgSrc);
        saveImagesToCookie(currentImages);
        console.log('Image added to cookie:', imgSrc);
    } else {
        currentImages = currentImages.filter(src => !(src === imgSrc));
        console.log('Image removed from cookie:', imgSrc);
    }
}

export { addImageToCookie, getImagesFromCookie };