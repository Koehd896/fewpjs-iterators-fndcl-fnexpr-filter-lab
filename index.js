function findMatching(drivers, string) {
  const match = drivers.filter( driver => driver.toLowerCase() === string.toLowerCase());
  return match;
}

function fuzzyMatch(drivers, string) {
    const strLength = string.length;
    const match = drivers.filter( driver => 
        driver.slice(0, strLength).toLowerCase() === string.toLowerCase());
    return match;
}

function matchName(drivers, string) {
    const match = drivers.filter( driver => driver.name === string)
    return match;
}
