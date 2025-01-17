ymaps.ready(init);

    function init() {
      const federationTowerCoords = [55.749444, 37.536667];

      const map = new ymaps.Map("map", {
        center: federationTowerCoords,
        zoom: 16
      });

      const placemark = new ymaps.Placemark(federationTowerCoords, {
        hintContent: "Башня 'Федерация'",
        balloonContent: "Москва-Сити, башня 'Федерация'"
      });

      map.geoObjects.add(placemark);
    }