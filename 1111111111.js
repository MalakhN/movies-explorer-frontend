//Функция на рендер фильмов
  const renderMovies = React.useMemo(() => {
    const paginationCounter =
      screenWidth < WINDOW_WIDTH_MEDIUM
        ? 5
        : screenWidth < 1280
        ? 8
        : 12;

    return filteredMovies.slice(0, paginationCounter + nextMovies);
  }, [nextMovies, screenWidth, filteredMovies]);

  const handleClickButtonMore = () => {
    if (screenWidth < 1280) {
      setNextMovies((prev) => prev + 2);
    } else if (screenWidth >= 1280) {
      setNextMovies((prev) => prev + 3);
    }
  };

export const SHORT_MOVIE_DURATION = 40;

export const MIN_ADDED_CARDS = 2;
export const MAX_ADDED_CARDS = 3;

export const SHOWED_CARDS_MIN = 5;
export const SHOWED_CARDS_MEDIUM = 8;
export const SHOWED_CARDS_MAX = 12;

export const WINDOW_WIDTH_MAX = 1280;
export const WINDOW_WIDTH_MEDIUM = 768;