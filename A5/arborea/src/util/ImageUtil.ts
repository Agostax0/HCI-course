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

function getImages(): {
    src: string;
    style: string;
    visibile: boolean;
}[] {

    const toExport:
    {
        src: string;
        style: string;
        visibile: boolean;
    }[] = []

    const styles = [
        "image11Icon",
        "image11Icon2",
        "image11Icon3",
        "image11Icon4",
        "image11Icon5",
        "image11Icon6",
        "image11Icon7"
    ]
    const imagesFromCookie: string[] = getImagesFromCookie().slice(0, styles.length);


    for (let i = 0; i < styles.length; i++) {
        const img = imagesFromCookie[i];
        const style = styles[i];
        if (img && style) {
            toExport.push({
                src: /*new URL('@', import.meta.url).href + "/assets/images/equipment-items/"  +*/ img,
                style: style,
                visibile: true
            });
        }
    }

    return toExport;
}

export { addImageToCookie, getImagesFromCookie, getImages };