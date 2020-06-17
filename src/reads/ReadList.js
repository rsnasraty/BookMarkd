const ReadCard = props => {
    const [user, setUser] = useState({});
    const [readingMaterials, setReadingMaterials] = useState ([])
  
    useEffect(() => {
      //got here now make call to get employee with animal
      ReadManager.getWithReadingMaterials(props.match.params.userId)
        .then(APIResult => {
          setUser(APIResult);
          setReadingMaterials(APIResult.readingMaterials);
        });
    }, []);
  