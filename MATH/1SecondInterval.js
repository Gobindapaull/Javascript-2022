const OneSecondInterval = async (n) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
}

OneSecondInterval();
