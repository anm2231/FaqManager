package com.example.BackendApplication;

import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class SearchLogService {

    // Stores keyword -> count
    private final Map<String, Integer> searchCountMap = new ConcurrentHashMap<>();

    public void logSearch(String keyword) {
        searchCountMap.merge(keyword.toLowerCase(), 1, Integer::sum);
    }

    public Map<String, Integer> getTopSearches(int limit) {
        return searchCountMap.entrySet().stream()
                .sorted((a, b) -> b.getValue().compareTo(a.getValue()))
                .limit(limit)
                .collect(LinkedHashMap::new,
                        (m, e) -> m.put(e.getKey(), e.getValue()),
                        LinkedHashMap::putAll);
    }
}
