const COOKIE_NAME = 'selectedImages';

function getImagesFromCookie(): string[] {
    const cookies = document.cookie.split(';');
    const imageCookie = cookies.find(cookie => cookie.trim().startsWith(`${COOKIE_NAME}=`));

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
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(images))}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

function addImageToCookie(src: string): void {
    const imgSrc = src;
    var currentImages = getImagesFromCookie();

    if (!currentImages.includes(imgSrc)) {
        currentImages.push(imgSrc);
        saveImagesToCookie(currentImages);
        console.log('Image added to cookie:', imgSrc);
    } else {
        currentImages = currentImages.filter(src => src !== imgSrc);
        console.log('Image removed from cookie:', imgSrc);
    }
    saveImagesToCookie(currentImages);
}

function removeImageFromCookie(src: string): void {
    const currentImages = getImagesFromCookie();
    const newImages = currentImages.filter(s => s !== src);
    
    if (newImages.length !== currentImages.length) {
        saveImagesToCookie(newImages);
        console.log('Permanently removed from bag:', src);
    }
}

function getImages(): { src: string; style: string; visible: boolean }[] {

    const toExport: { src: string; style: string; visible: boolean }[] = []

    const styles = [
        "image11Icon",
        "image11Icon2",
        "image11Icon3",
        "image11Icon4",
        "image11Icon5",
        "image11Icon6",
        "image11Icon7"
    ]
    const imagesFromCookie = getImagesFromCookie();

    // Loop through available styles or images, whichever is shorter
    const limit = Math.min(styles.length, imagesFromCookie.length);


    for (let i = 0; i < limit; i++) {
        const img = imagesFromCookie[i];
        const style = styles[i];
        if (img && style) {
            toExport.push({
                src: /*new URL('@', import.meta.url).href + "/assets/images/equipment-items/"  +*/ img,
                style: style,
                visible: true
            });
        }
    }

    return toExport;
}

export { addImageToCookie, getImagesFromCookie,removeImageFromCookie, getImages };